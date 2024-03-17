import React from "react";

import { Button, Img, List, Text } from "components";
import DesignHomepageColumnFour from "components/HomePageColumn4";
import DesignHomepageOnboardedcard from "components/OnboardedCard";
import DesignServicesHeadingbody from "components/ServiceHeading";
import DesignServicesHeadingbody1 from "components/ServiceHeading1";
import Footer from "components/Footer";
import Header from "components/Header";

const DesignServicesPage = () => {
  const designHomepageOnboardedcardPropList = [
    {},
    {
      doctorsonboardedcount: "50+",
      userimage: "images/img_image70.png",
      doctorsonboardedtext: "hospitals tied up",
    },
    { doctorsonboardedtext: "lives impacted", doctorsonboardedcount: "10K+" },
    {
      doctorsonboardedcount: "3",
      userimage: "images/img_image70.png",
      doctorsonboardedtext: "countries",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-10 h-20 md:h-auto items-center justify-between md:px-5 px-[100px] py-2 w-full" />
        <div className="flex flex-col gap-14 items-start justify-start mt-[60px] md:px-10 sm:px-5 px-[100px] w-auto md:w-full">
          <div className="flex flex-col gap-4 items-center justify-start max-w-[1240px] mx-auto w-full">
            <Text
              className="leading-[54.00px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 tracking-[0.50px]"
              size="txtPoppinsBold36"
            >
              <span className="text-gray-900 font-poppins font-bold">
                <>
                  Empowering Your Healthcare Journey with <br />
                </>
              </span>
              <span className="text-light_blue-900 font-poppins font-bold">
                Excellence and Compassion
              </span>
            </Text>
            <Text
              className="leading-[33.00px] max-w-[816px] md:max-w-full text-center text-gray-700 text-lg"
              size="txtPoppinsRegular18Gray700"
            >
              <>
                At MediYatri, we understand that your health is a priority, and
                navigating the intricacies of healthcare can be overwhelming.
                Here&#39;s why choosing MediYatri is the right decision for your
                medical journey in India.
              </>
            </Text>
          </div>
          <div className="sm:h-[1674px] h-[523px] md:h-[904px] relative w-full">
            <div className="absolute flex flex-col gap-10 h-full inset-y-[0] items-center justify-start left-[0] max-w-[1240px] my-auto py-8 w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-full"
                  size="txtPoppinsBold36"
                >
                  We are expanding
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                {designHomepageOnboardedcardPropList.map((props, index) => (
                  <React.Fragment key={`DesignHomepageOnboardedcard${index}`}>
                    <DesignHomepageOnboardedcard
                      className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-start px-5 py-6 rounded-lg shadow-bs3 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <DesignHomepageColumnFour className="fixed bottom-[5%] flex flex-col gap-4 h-[265px] md:h-auto items-end justify-end right-[0] w-[249px]" />
          </div>
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1240px] mx-auto w-full">
            <DesignServicesHeadingbody className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full" />
            <DesignServicesHeadingbody1 className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full" />
            <DesignServicesHeadingbody
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              expertguidancetext="Forex Support"
              descriptiontwotext="Easy & Hassle-Free Forex Availability."
              rectanglefifteenimage="images/img_image76.png"
            />
            <DesignServicesHeadingbody1
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              title="Food Arrangement"
              description="Your Favorite Food - Delivered"
              userimage="images/img_image82.png"
            />
            <DesignServicesHeadingbody
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              expertguidancetext="Medical Visa Letter"
              descriptiontwotext="Your First Steps Towards Your Healthy Journey"
              rectanglefifteenimage="images/img_image77.png"
            />
            <DesignServicesHeadingbody1
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              description={
                <Text className="leading-[31.00px] text-base text-gray-700">
                  <span className="text-gray-700 font-poppins text-left font-normal">
                    <>
                      Your Cab awaits at the Airport , On Time!
                    </>
                  </span>
                  {/* <span className="text-gray-700 font-poppins text-left text-xs font-normal">
                    *Conditions Apply.{" "}
                  </span> */}
                </Text>
              }
              title="Airport Transfer Service"
              userimage="images/img_image78.png"
            />
            <DesignServicesHeadingbody
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              expertguidancetext="On demand Video Call with Doctors"
              descriptiontwotext="Top Indian Doctors available in your Country"
            />
            <DesignServicesHeadingbody1
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              userimage="images/img_rectangle15_1.png"
              title="Cultural Sensitivity"
              description=" We understand the importance of cultural nuances in healthcare. Our team is dedicated to providing personalized care that respects your cultural background, ensuring a comfortable and supportive environment during your stay."
            />
            <DesignServicesHeadingbody
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              expertguidancetext="Hospital Partnerships"
              descriptiontwotext="We have 100+ Hospital Partners"
              rectanglefifteenimage="images/img_image79.png"
            />
            <DesignServicesHeadingbody1
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              userimage="images/img_rectangle15_2.png"
              title="Comfortable Stays"
              description="Cheap, clean and spacious rooms for you."
            />
            <DesignServicesHeadingbody
              className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1240px] w-full"
              expertguidancetext="24/7 On Ground Support Guranteed."
              descriptiontwotext="We assist you when you need us on ground."
              rectanglefifteenimage="images/img_image80.png"
            />
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[220px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default DesignServicesPage;
