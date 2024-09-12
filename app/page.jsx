import { Feed } from "@components/Feed";
import OnBoading from "@components/onBoading";

const Onboarding = () => {
  return (
    <section className="w-full flex flex-col items-center p-6">
      <h1 className="head_text text-center">
        {" "}
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Your Knowledge</span>
      </h1>
      <p className="desc text-center">
        Devhub is a community-driven platform where developers share their
        knowledge and discover insights from others. Let's get started on your
        journey.
      </p>

      <Feed />
      {/* <OnBoading /> TODO: for future use */}
    </section>
  );
};

export default Onboarding;
