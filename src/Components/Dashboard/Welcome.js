import React from "react";
import { Container, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="flex justify-between mx-12 my-7">
            <div className="text-[28px] text-[#000000] adminstd_medium opacity-100 leading-tight font-normal">
              Welcome Malik Saleh
            </div>
            <div className="text-[28px] text-[#000000] adminstd_medium opacity-100 leading-tight font-normal">
              Oct 4, 2023 - Oct 4, 2023
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Welcome;
