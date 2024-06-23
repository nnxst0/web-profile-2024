import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Adventurer (ISFP)</p>
        <p className="pb-2">
        Adventurers explore other people's homes and rob them discreetly, 
        reveling in the thrill and challenge of their daring exploits.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>LOVER</Badge>
          <Badge>CHARMING</Badge>
          <Badge>ATTRACTIVE</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
