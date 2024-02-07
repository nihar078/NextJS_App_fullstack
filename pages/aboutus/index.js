// our-domain.com/aboutus

import Link from "next/link";
import { Fragment } from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const AboutUSPage = () => {
  return (
    <Fragment>
      <h1>AboutUS</h1>
      <div>
        {details.map((person) => {
            return <div key={person.id}> <Link href={`/aboutus/${person.id}`}>
            {person.name}</Link></div>
        })}
      </div>
    </Fragment>
  );
};

export default AboutUSPage;
