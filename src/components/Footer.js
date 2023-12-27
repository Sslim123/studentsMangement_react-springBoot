import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function Footer() {
  const [date, setDates] = useState(new Date());
  const handleButton = () => {
    <Link to="ListStudents">go up</Link>;
  };
  //const handleDate = () => {
  useEffect(() => {
    setInterval(() => setDates(new Date()), 1000);
  }, []);
  //}
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Students Register App</Card.Title>
        <Card.Text>
          {`${"Date is "} - ${date.getDate()} / ${
            date.getMonth() + 1
          } / ${date.getFullYear()}`}
        </Card.Text>
        <Button onClick={handleButton} variant="primary">
          Go up
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{`${"Time is "}- ${date.getHours()} / ${date.getMinutes()} / ${date.getSeconds()}`}</Card.Footer>
    </Card>
  );
}
