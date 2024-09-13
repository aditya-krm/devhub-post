"use client";

import { Feed } from "@components/Feed";
import OnBoading from "@components/onBoading";
import { useSession } from "next-auth/react";
import { HashLoader } from "react-spinners";

const Onboarding = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {session ? (
        <Feed />
      ) : (
        <section className="w-full flex flex-col items-center p-6">
          <h1 className="head_text text-center">
            {" "}
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">Your Knowledge</span>
          </h1>
          <p className="desc text-center">
            Devhub is a community-driven platform where developers share their
            knowledge and discover insights from others. Let's get started on
            your journey.
          </p>
        </section>
      )}
      {/* <OnBoading /> TODO: for future use */}
    </>
  );
};

export default Onboarding;
