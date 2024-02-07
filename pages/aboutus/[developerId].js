// our-domain.com/aboutus/developer
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Developer = () => {
  const [developer, setDeveloper] = useState({});
  const router = useRouter();
  const { developerId } = router.query;
  useEffect(() => {
    setDeveloper(
      // details.find((detail) => detail.id === +developerId)
      // or
      details.find((detail) => detail.id === parseInt(developerId))
    );
  }, [developerId]);
  console.log(developer);
  return (
    <div>
      <h1>Details</h1>
      {developer ? (
        <h3>
          {/* {developer.name}  {developer.role} */}
          {developer.name} - {developer.role}

        </h3>
      ) : (
        <h3>Developer doesn't exist.</h3>
      )}
    </div>
  );
};

export default Developer;
