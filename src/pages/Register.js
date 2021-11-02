import React from "react";
import Fade from "react-reveal/Fade";

<<<<<<< Updated upstream
class Register extends Component {
  render() {
    const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;
const RegisterWrapper = styled.div`
    height: 90vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Right = styled.div`
    flex: 2;
    height: 100vh;
=======
import { InputText } from "elements/Form";
>>>>>>> Stashed changes

export default function Register(props) {
  const { data } = props;

  console.log(props);
  return (
    <Fade>
      <div className="container d-none d-md-block" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          {/* <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
          </div> */}
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>

      <div className="container d-block d-md-none" style={{ marginBottom: 30 }}>
        <div className="row">
          <div className="col-12 py-5">
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}