import React from "react";
import axios from "axios";

class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      page: 0,
      scrollFlag: false
    };
  }

  async componentDidMount() {
    this.setState({
      repos: await this.getOrgBasedRepos("splunk", this.state.page + 1),
      page: this.state.page + 1
    });
  }

  getOrgBasedRepos = (orgName, page, sortOrder = "created") => {
    const url = `https://api.github.com/orgs/${orgName}/repos`;
    return axios
      .get(url, { params: { sort: sortOrder, page: page } })
      .then((response) => {
        return response.data;
      });
  };

  checkScrollAndCall = async (event) => {
    const scrolledVal = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight - 100;
    if (scrollHeight - scrolledVal <= 210 && !this.state.scrollFlag) {
      console.log("HERE", this.state.scrollFlag);
      this.setState({
        scrollFlag: true
      });
      let { repos } = this.state;
      this.setState(
        {
          repos: [
            ...repos,
            ...(await this.getOrgBasedRepos("splunk", this.state.page + 1))
          ],
          page: this.state.page + 1
        },
        this.setState({ scrollFlag: false })
      );
    }
  };

  render() {
    const { repos } = this.state;
    console.log(repos);
    return (
      <div className="repodiv" onScroll={(e) => this.checkScrollAndCall(e)}>
        {repos.map((repo) => (
          <div>{repo.name}</div>
        ))}
      </div>
    );
  }
}

export default InfiniteScroll;
