import React from "react";
import Card from "./common/Card";

type Props = {};

const Bio = (props: Props) => {
  return (
    <Card title="Bio">
      <div>
      He is an exceptional engineer by day and a notorious bandit by night. His technical prowess 
      and sharp mind have made him a valuable asset in the engineering world, tackling complex 
      projects with precision and innovation. However, the thrill of the night led him to a 
      life of crime, where his meticulous planning and calculated risks turned him into 
      a feared figure in the underworld.
      </div>
    </Card>
  );
};

export default Bio;
