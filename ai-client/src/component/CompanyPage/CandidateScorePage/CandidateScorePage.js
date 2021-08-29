import React from "react";
import { CandidateScorePageContent } from "./CandidateScorePageContent";
import { connect } from "react-redux";
import { UserStatusTestApi, UserProfile } from "../../_Api/User";
import { PageSpinner } from "../../UserProfile/PageSpinner";
import { CandidateSelectionStatusApi } from "../../_Api/Company";

class CandidateScorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      user: null,
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    UserStatusTestApi(id, this.props.admin.company_id)
      .then((res) => {
        this.setState({ data: res.data });
        console.log(res.data);
        UserProfile(id).then(({ data }) => {
          this.setState({ user: data });
          console.log(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onCandidateSelection = (status) => {
    let { id } = this.props.match.params;
    CandidateSelectionStatusApi(status, this.props.admin.company_id, id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => console.log("something went wrong"));
  };

  render() {
    return (
      <div className="">
        {this.state.data && this.state.user ? (
          <CandidateScorePageContent
            data={this.state.data}
            user={this.state.user}
            onCandidateSelection={this.onCandidateSelection}
          />
        ) : (
          <PageSpinner />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin: state.user.user,
  };
}

CandidateScorePage = connect(mapStateToProps, null)(CandidateScorePage);
export { CandidateScorePage };
