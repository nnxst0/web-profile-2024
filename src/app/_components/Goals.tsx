import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Robbed 50 houses</li>
          <li>Fell in love with the girl next door</li>
          <li>Smiled at everyone around the world</li>
          <li>Upgraded his heist skills to full options</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
