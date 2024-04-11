import React from "react";
import Reviews from "./Reviews";

export default function CompanyReview() {
  return (
    <>
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Feel Free To Post Reviews About Companies
            </h2>

            <div className="bg-gray-100 rounded-md p-6">
              <div className="text-gray-600">
                <h2 className="text-lg font-semibold mb-4">
                  Guidelines for Posting Reviews
                </h2>
                <ul className="list-disc pl-5 text-left">
                  <li className="mb-2 ">
                    <span className="font-semibold">Accuracy:</span> Ensure that
                    your review is factually accurate and based on your genuine
                    experiences.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Respectfulness:</span>{" "}
                    Maintain a respectful tone and refrain from using offensive
                    language or personal attacks.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Relevance:</span> Focus your
                    review on aspects relevant to the company's work
                    environment, culture, and policies.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Confidentiality:</span>{" "}
                    Avoid disclosing confidential or proprietary information
                    about the company or its employees.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Constructiveness:</span>{" "}
                    Provide constructive feedback that can help both current and
                    prospective employees make informed decisions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <div>
        <Reviews />
      </div>
    </div>


</>

  );
}
