import React, { useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import { Button, Text, MyDatePicker } from "components";
import { useNavigate } from "react-router-dom";

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const [selectedDueDate, setSelectedDueDate] = useState(null);

  // Simulated project data
  const sampleProject = {
    creationDate: "2023-10-19",
    name: "Sample Project",
    manager: "John Doe",
    creationDate: "2023-10-08",
    dueDate: "2023-11-15",
    description: "This is a sample project description.",
  };

  const [project, setProject] = useState(sampleProject);

  const handleDueDateChange = (dueDate) => {
    setSelectedDueDate(dueDate);
  };

  const handleDeleteProject = () => {
    // Simulated project deletion logic
    // Set the project to null
    setProject(null);
    // You can navigate back to the project list or another page.
    navigate("/myprojects");
  };

  const handleUpdateProject = () => {
    // Simulated project update logic
    // Update the project with new data
    setProject({
      ...project,
      name: "Updated Project Name",
      description: "Updated project description",
    });
    // You can navigate back to the project details page or another page.
    navigate("/myprojects");
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <div className="h-[1024px] relative w-[23%] md:w-full">
            <Sidebar className="!sticky !w-[299px] border border-black-900 border-solid flex h-screen md:hidden justify-start m-auto overflow-auto top-[0]"></Sidebar>
            <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[6%] w-[45%]">
              <Text
                className="text-[22px] text-center text-indigo-800 sm:text-lg md:text-xl"
                size="txtPoppinsBold22"
                onClick={() => navigate("/dashboard")}
              >
                ProjectFlow
              </Text>
              <Text
                className="ml-7 md:ml-[0] mt-[102px] text-base text-indigo-800 tracking-[0.44px]"
                size="txtPoppinsRegular16"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Text>
              <div className="flex flex-col gap-[46px] items-start justify-start md:ml-[0] ml-[35px] mt-[47px]">
                <Text
                  className="md:ml-[0] ml-[3px] text-base text-indigo-800 tracking-[0.44px]"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/myprojects")}
                >
                  Projects
                </Text>
                <Text
                  className="text-base text-indigo-800 tracking-[0.44px]"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/mytasks")}
                >
                  My Tasks
                </Text>
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-indigo-800 tracking-[0.44px]"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/apps")}
                >
                  Apps
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[97px] justify-start md:mt-0 mt-[68px] w-3/4 md:w-full">
            <Text
              className="md:ml-[0] ml-[851px] text-base text-indigo-800 tracking-[0.44px]"
              size="txtPoppinsRegular16"
              onClick={() => navigate("/myprofile")}
            >
              My Profile
            </Text>
            <Text
              className="md:ml-[0] ml-[23px] mt-[89px] sm:text-3xl md:text-[32px] text-[34px] text-center text-indigo-800"
              size="txtPoppinsBold34"
            >
              Project Details
            </Text>
            <div className="bg-gray-50 flex flex-col items-start justify-start mt-8 p-[39px] sm:px-5 rounded-[30px] w-full">
              <div className="flex flex-col items-start justify-start mt-[19px] w-[95%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-[97%] md:w-full">
                  <Text className="text-base text-indigo-800 tracking-[0.44px]" size="txtPoppinsRegular16">
                    Project Creation Date
                  </Text>
                  <input
                    type="text"
                    className="border-b border-indigo-800_01 text-base w-[76%]"
                    value={project.creationDate}
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[34px] w-[97%] md:w-full">
                  <Text className="md:mt-0 mt-0.5 text-base text-indigo-800 tracking-[0.44px]" size="txtPoppinsRegular16">
                    Project Name
                  </Text>
                  <div className="h-12 relative w-[76%] md:w-full">
                    <input type="text" className="text-base w-full" value={project.name} />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[17px] w-[97%] md:w-full">
                  <Text className="text-base text-indigo-800 tracking-[0.44px]" size="txtPoppinsRegular16">
                    Project Manager
                  </Text>
                  <input type="text" className="border-b border-indigo-800_01 text-base w-[76%]" value={project.manager} />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[37px] w-[97%] md:w-full">
                  <Text className="text-base text-indigo-800 tracking-[0.44px]" size="txtPoppinsRegular16">
                    Team Members
                  </Text>
                  <input type="text" className="border-b border-indigo-800_01 text-base w-[76%]" />
                </div>
                <div className="flex flex-row items-end justify-between mt-3.5 w-[32%] md:w-full">
                  <Text className="mb-[3px] mt-6 text-base text-indigo-800 tracking-[0.44px]" size="txtPoppinsRegular16">
                    Due Date
                  </Text>
                  <MyDatePicker selectedDate={selectedDueDate} handleDateChange={handleDueDateChange} />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-9 w-[97%] md:w-full">
                  <Text className="text-base text-indigo-800 tracking-[0.44px]" size="txtPoppinsRegular16">
                    Description
                  </Text>
                  <textarea
                    className="border border-indigo-800 border-solid h-[70px] md:mt-0 mt-2.5 w-[74%]"
                    placeholder="Enter project description"
                    value={project.description}
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-[34px] w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[84px] md:ml-[0] ml-[745px] text-base text-center tracking-[0.44px] mr-[10px]"
                    shape="round"
                    color="indigo_800_01"
                    onClick={handleUpdateProject}
                  >
                    Update
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[84px] md:ml-[0] text-base text-center tracking-[0.44px]"
                    shape="round"
                    style={{ background: "maroon", color: "white" }}
                    onClick={handleDeleteProject}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
