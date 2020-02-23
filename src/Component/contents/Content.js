import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    };
  }
  thongbao = () => {
    alert("Bye bye");
  };
  thongbao2 = x => {
    alert(x);
  };
  renderButton = () => {
    return (
      <div className="row">
        <div className="btnGroup">
          <div className="btn btn-info" onClick={() => this.editClick()}>
            Edit
          </div>
          <div
            className="btn btn-warning"
            onClick={() => this.thongbao2("He he he")}
          >
            Remove
          </div>
          <div
            className="btn btn-danger"
            onClick={this.thongbao2.bind(this, "hi hi hi")}
          >
            ####
          </div>
        </div>
      </div>
    );
  };
  renderForm = () => (
    <div className="row">
      <div className="form-group">
        <input
          ref={input => {
            this.trunggian = input;
          }}
          defaultValue={this.props.title}
          type="text"
          className="form-control"
        />
        <div
          className="btn btn-danger btn-block"
          onClick={() => this.saveClick()}
        >
          Save
        </div>
      </div>
    </div>
  );
  displayCheck = () => {
    if (this.state.status === 0) {
      return this.renderButton();
    } else {
      return this.renderForm();
    }
  };
  editClick = () => {
    this.setState({
      status: 1
    });
  };
  saveClick = () => {
    this.setState({
      status: 0
    });
    console.log(this.trunggian.value);
  };
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className={"col-lg-6 " + this.props.position1}>
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src={this.props.img}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">{this.props.title}</h2>
                  <p>{this.props.content}</p>
                  {this.displayCheck()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
