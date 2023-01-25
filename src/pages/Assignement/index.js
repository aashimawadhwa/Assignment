import React from "react";

import { Img, Text, Button, List } from "components";

const AssignementPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <header className="bg-bluegray_900 flex md:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-center px-[160px] sm:px-[20px] md:px-[40px] py-[16px] self-stretch w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
            <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
              <Img
                src="images/img_image21.png"
                className="h-[44px] md:h-[auto] sm:h-[auto] object-cover w-[44px]"
                alt="imageTwentyOne"
              />
            </div>
            <Text
              className="text-left text-white_A700 w-[auto]"
              as="h4"
              variant="h4"
            >
              Annette Black
            </Text>
          </div>
          <ul className="flex sm:flex-col flex-row gap-[32px] sm:hidden items-center justify-start w-[auto] common-row-list">
            <li className="mt-[14px] mb-[10px] sm:w-[100%] sm:mt-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Programs
              </a>
            </li>
            <li className="mt-[13px] mb-[14px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Retreats
              </a>
            </li>
            <li className="mt-[14px] mb-[10px] sm:w-[100%] sm:mt-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Blogs
              </a>
            </li>
            <li className="mt-[13px] mb-[14px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Contact{" "}
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[max-content] min-w-[19%] text-center">
              <Button
                className="cursor-pointer font-semibold text-[16px] text-center text-white_A700"
                shape="CircleBorder22"
                size="sm"
                variant="OutlineWhiteA700"
              >
                Login
              </Button>
            </li>
          </ul>
        </header>
        <div className="bg-bluegray_900 flex flex-col gap-[40px] items-center justify-center pb-[60px] pt-[80px] self-stretch w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[930px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[48px] items-center justify-center md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[20px] items-end justify-start md:w-[100%] sm:w-[100%] w-[50%]">
                <Img
                  src="images/img_div.png"
                  className="h-[326px] sm:h-[auto] object-cover rounded-radius12 w-[100%]"
                  alt="div"
                />
                <Img
                  src="images/img_frame3270890.svg"
                  className="h-[36px] w-[140px]"
                  alt="Frame3270890"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-center sm:w-[100%] w-[auto]">
                <Text
                  className="leading-[60.00px] md:leading-[normal] sm:leading-[normal] max-w-[421px] text-left text-white_A700"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-orange_A200 text-[44px] font-nunitosans font-black sm:text-[34px] md:text-[40px]">
                    Get ready
                  </span>
                  <span className="text-white_A700 text-[44px] font-nunitosans font-extrabold sm:text-[34px] md:text-[40px]">
                    {" "}
                  </span>
                  <span className="text-white_A700 text-[44px] font-nunitosans font-bold sm:text-[34px] md:text-[40px]">
                    to grow with us ⭐️
                  </span>
                </Text>
                <Text
                  className="font-normal not-italic self-stretch text-left text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Start with us today
                </Text>
                <Button
                  className="flex items-center justify-center min-w-[74%] text-center w-[max-content]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[8px] text-center"
                      alt="arrow_right"
                    />
                  }
                  size="2xl"
                  variant="FillOrangeA200"
                >
                  <div className="bg-transparent cursor-pointer font-bold sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_900 text-left">
                    View all courses
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[48px] items-start justify-start max-w-[1060px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
              <Img
                src="images/img_checkmark.svg"
                className="h-[84px] w-[84px]"
                alt="checkmark"
              />
              <Text
                className="font-bold self-stretch text-left text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                500+ happy customers{" "}
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[48px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 w-[66%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[24px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="bg-orange_A200 flex flex-col h-[84px] items-center justify-start p-[22px] sm:px-[20px] rounded-radius50 w-[84px]">
                  <Img
                    src="images/img_checkmark_bluegray_900.svg"
                    className="h-[39px] w-[39px]"
                    alt="checkmark One"
                  />
                </div>
                <Text
                  className="font-bold self-stretch text-left text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Learn as you go
                </Text>
              </div>
              <div className="flex flex-col gap-[24px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="bg-orange_A200 flex flex-col h-[84px] items-center justify-start p-[22px] sm:px-[20px] rounded-radius50 w-[84px]">
                  <Img
                    src="images/img_checkmark_bluegray_900.svg"
                    className="h-[39px] w-[39px]"
                    alt="checkmark Two"
                  />
                </div>
                <Text
                  className="font-bold self-stretch text-left text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Self-paced learning
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-blue_100 flex flex-col gap-[36px] items-center justify-start py-[60px] self-stretch w-[100%]">
          <div className="flex flex-col items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:w-[100%] w-[auto]">
            <Text
              className="text-bluegray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Checkout my courses
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[36px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1008px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-orange_100 flex flex-col gap-[16px] items-center justify-center mx-[0] p-[16px] rounded-radius8 w-[auto]">
              <Img
                src="images/img_rectangle1690.png"
                className="h-[280px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[280px]"
                alt="Rectangle1690"
              />
              <Text
                className="font-extrabold self-stretch text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Toledo
              </Text>
              <Button
                className="flex items-center justify-center min-w-[100%] text-center w-[max-content]"
                rightIcon={
                  <Img
                    src="images/img_arrowright_white_a700.svg"
                    className="ml-[8px] text-center"
                    alt="arrow_right"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold self-stretch text-[17px] text-left text-white_A700">
                  Join Now
                </div>
              </Button>
            </div>
            <div className="bg-orange_100 flex flex-col gap-[16px] items-center justify-center mx-[0] p-[16px] rounded-radius8 w-[auto]">
              <Img
                src="images/img_rectangle1690_280x280.png"
                className="h-[280px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[280px]"
                alt="Rectangle1690 One"
              />
              <Text
                className="font-extrabold self-stretch text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Pembroke Pines
              </Text>
              <Button
                className="flex items-center justify-center min-w-[100%] text-center w-[max-content]"
                rightIcon={
                  <Img
                    src="images/img_arrowright_white_a700.svg"
                    className="ml-[8px] text-center"
                    alt="arrow_right"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold self-stretch text-[17px] text-left text-white_A700">
                  Join Now
                </div>
              </Button>
            </div>
            <div className="bg-orange_100 flex flex-col gap-[16px] items-center justify-center mx-[0] p-[16px] rounded-radius8 w-[auto]">
              <Img
                src="images/img_rectangle1690_1.png"
                className="h-[280px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[280px]"
                alt="Rectangle1690 Two"
              />
              <Text
                className="font-extrabold self-stretch text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Naperville
              </Text>
              <Button
                className="flex items-center justify-center min-w-[100%] text-center w-[max-content]"
                rightIcon={
                  <Img
                    src="images/img_arrowright_white_a700.svg"
                    className="ml-[8px] text-center"
                    alt="arrow_right"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold self-stretch text-[17px] text-left text-white_A700">
                  Join Now
                </div>
              </Button>
            </div>
          </List>
        </div>
        <div className="flex flex-col items-center justify-center py-[60px] self-stretch w-[100%]">
          <div className="flex flex-col gap-[36px] items-center justify-start max-w-[1177px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <Text
              className="text-bluegray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Bootcamps
            </Text>
            <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[36px] items-center justify-center md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="cursor-pointer font-bold min-w-[266px] sm:text-[24px] md:text-[26px] text-[28px] text-bluegray_900 text-center w-[auto]"
                  size="lg"
                  variant="FillOrangeA200"
                >
                  Corporate
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[231px] sm:text-[24px] md:text-[26px] text-[28px] text-bluegray_900 text-center w-[auto]"
                  size="lg"
                  variant="FillOrange100"
                >
                  Groups
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[268px] sm:text-[24px] md:text-[26px] text-[28px] text-bluegray_900 text-center w-[auto]"
                  size="lg"
                  variant="FillOrange100"
                >
                  Upcoming
                </Button>
              </div>
              <div className="bg-orange_100 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[64px] items-center justify-start p-[60px] sm:px-[20px] md:px-[40px] rounded-radius16 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[28px] items-start justify-start sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Amet minim mollit{" "}
                    </Text>
                    <Text
                      className="font-semibold leading-[150.00%] max-w-[563px] text-bluegray_900 text-left"
                      as="h3"
                      variant="h3"
                    >
                      Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                      duis ullamco cillum dolor. Voluptate exercitation
                      incididunt aliquip deserunt reprehenderit elit laborum.{" "}
                    </Text>
                  </div>
                  <Button
                    className="flex items-center justify-center min-w-[50%] text-center w-[max-content]"
                    rightIcon={
                      <Img
                        src="images/img_arrowright_white_a700.svg"
                        className="ml-[8px] text-center"
                        alt="arrow_right"
                      />
                    }
                    size="xl"
                  >
                    <div className="bg-transparent cursor-pointer font-bold sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700">
                      Join Now
                    </div>
                  </Button>
                </div>
                <Img
                  src="images/img_img20210220172553.png"
                  className="h-[328px] sm:h-[auto] object-cover rounded-radius23 md:w-[100%] sm:w-[100%] w-[423px]"
                  alt="IMG20210220172553"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue_100 flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between px-[160px] sm:px-[20px] md:px-[40px] py-[32px] self-stretch w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
            <Text
              className="not-italic text-bluegray_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Powered by
            </Text>
            <Img
              src="images/img_frame2850.png"
              className="h-[28px] md:h-[auto] sm:h-[auto] object-cover w-[100px]"
              alt="Frame2850"
            />
          </div>
          <div className="flex flex-row gap-[32px] items-start justify-start w-[auto]">
            <Text
              className="not-italic text-bluegray_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Privacy Policy
            </Text>
            <Text
              className="not-italic text-bluegray_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Terms & Conditions
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignementPage;
