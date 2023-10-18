import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Text} from "components";
import { Sidebar } from "react-pro-sidebar";

const ProjectDetailsPage = () => {
    const navigate = useNavigate();
  const { id } = useParams();

  const [project, setProject] = useState(null);


  useEffect(() => {
    // Fetch project details from the API based on the 'id' parameter
    fetch(`/api/projects/${id}`) // Replace with your actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Project not found");
        }
        return response.json();
      })
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, [id]);

  const findProjectById = (projectId) => {
    // Replace this with your logic to fetch the project details
    return {
      name: "Sample Project",
      manager: "John Doe",
      creationDate: "2023-10-08",
      dueDate: "2023-11-15",
      description: "This is a sample project description.",
    };
  };


  const handleDeleteProject = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
        // Send a DELETE request to the server to delete the project
        fetch(`/api/projects/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              // Project deleted successfully, navigate to the project list
              navigate("/myprojects");
            } else {
              throw new Error("Project deletion failed");
            }
          })
          .catch((error) => {
            console.error("Error: ", error);
          });
      }
  };

  const handleUpdateProject = () => {
    // Implement project update logic here
    // You can make an API request to update the project information
    // After updating, you can navigate back to the project details page or another page.
    // Example API request:
    // updateProject(id, project) // You need to implement this function

    // Assuming a successful update, you can navigate to the project details page:
    navigate(`/projects/${id}`);
  };


  if (!project) {
    return (
      <div>
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <div className="h-[1024px] relative w-[22%] md:w-full">
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
            <div className="flex flex-col gap-[51px] items-start justify-start w-full">
              <div className="flex flex-row sm:gap-10 gap-[639px] items-start justify-start md:ml-[0] ml-[3px] w-[92%] md:w-full">
                <Text
                  className="mb-[7px] sm:text-3xl md:text-[32px] text-[34px] text-left text-indigo-800"
                  size="txtPoppinsBold34"
                >
                  Project Details
                </Text>
                <div>
                  <p>Project Name: {project.name}</p>
                  <p>Project Manager: {project.manager}</p>
                  <p>Creation Date: {project.creationDate}</p>
                  <p>Due Date: {project.dueDate}</p>
                  <p>Project Description: {project.description}</p>
                  <button onClick={handleDeleteProject}>Delete</button>
                  <button onClick={handleUpdateProject}>Update</button>
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
