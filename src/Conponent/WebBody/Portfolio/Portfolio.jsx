import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect } from "react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { LinkIcon, VideoIcon } from "lucide-react";

const Portfolio = () => {
  const [value, setValue] = React.useState(0);
  const [projects, setProjects] = useState([])
  const [copiedProject, setCopiedProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCopy = async (link, projectIndex) => {
    await navigator.clipboard.writeText(link || "");
    setCopiedProject(projectIndex);
    setTimeout(() => setCopiedProject(null), 2000);
  };


  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, [0])

  console.log(projects)

  return (
    <div id="portfolio"  className="mx-auto overflow-hidden bg-base-100 px-4 py-16 text-base-content sm:px-5 sm:py-20">
      <h2 className="mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl">My Portfolio</h2>

      <Box sx={{ width: "100%", color: "inherit" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          textSize="2xl"
          indicatorColor="error"
          centered
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
            },
          }}
          className="hover: text-red-700"
        >
          <Tab label="All" sx={{ fontSize: "20px" }} />
          <Tab label="React" sx={{ fontSize: "20px" }} />
          <Tab label="CMS" sx={{ fontSize: "20px" }} />
        </Tabs>

        {value === 0 && (
          <Box p={3}>
            <div className="mx-auto w-full max-w-[1200px] px-0 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group card bg-base-200 shadow-md border border-[#ffff]/20 rounded-md
        hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
        overflow-hidden"
                  >
                    {/* Image */}
                    <figure className="relative overflow-hidden">
                      <img
                        src={project?.image}
                        alt={project?.title}
                        className="w-full h-52 sm:h-56 object-cover 
            transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Number */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="badge text-white border-none font-semibold"
                          style={{ backgroundColor: "#ed2519" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Hover View */}
                      <div
                        className="absolute bottom-4 right-4 opacity-0 
            group-hover:opacity-100 transition-all duration-300"
                      >
                      </div>
                    </figure>

                    {/* Content */}
                    <div className="card-body p-5">
                      <h2
                        className="card-title break-words text-lg font-bold sm:text-xl 
            transition-colors duration-300 
            group-hover:text-[#ed2519]"
                      >
                        {project?.title}
                      </h2>

                      <p className="text-sm sm:text-base text-base-content/65 leading-relaxed line-clamp-3">
                        {project?.description}
                      </p>

                      <div className="divider my-1"></div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-2">

                        {/* Github */}
                        {project?.projectType !== "react" || (
                          <button
                            className="btn btn-sm btn-square 
              border-[#ed2519] text-[#ed2519]
              hover:bg-[#ed2519] hover:text-white 
              hover:border-[#ed2519] transition-all duration-300"
                          >
                            <BsGithub className="text-lg" />
                          </button>
                        )}

                        {/* Video */}
                        <a href={project?.link} target="_blank" rel="noopener noreferrer"
                          className="btn btn-sm btn-square 
              border-[#ed2519] text-[#ed2519]
              hover:bg-[#ed2519] hover:text-white 
              hover:border-[#ed2519] transition-all duration-300"
                        >
                          <VideoIcon className="text-lg" />
                        </a>

                        {/* Link */}
                        <button
                          type="button"
                          onClick={() => handleCopy(project?.link, index)}
                          className={`btn btn-sm ${copiedProject === index ? "px-1 gap-0.5" : "btn-square"} border-[#ed2519] text-[#ed2519] hover:bg-[#ed2519] hover:text-white hover:border-[#ed2519] transition-all duration-300`}
                        >
                          <LinkIcon className="text-lg" />
                          {copiedProject === index && (
                            <span className="text-[8px] whitespace-nowrap">Copied</span>
                          )}
                        </button>

                        {/* View */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="btn btn-sm ml-auto 
              bg-[#ed2519] text-white border-[#ed2519]
              hover:bg-[#c91d14] hover:border-[#c91d14]
              transition-all duration-300"
                        >
                          View
                        </button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </Box>
        )}
        {value === 1 && (
          <Box p={3}>
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(project => project.projectType === "react").map((project, index) => (
                  <div
                    key={index}
                    className="group card bg-base-200 shadow-md border border-[#ffff]/20 rounded-md
        hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
        overflow-hidden"
                  >
                    {/* Image */}
                    <figure className="relative overflow-hidden">
                      <img
                        src={project?.image}
                        alt={project?.title}
                        className="w-full h-52 sm:h-56 object-cover 
            transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Number */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="badge text-white border-none font-semibold"
                          style={{ backgroundColor: "#ed2519" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Hover View */}
                      <div
                        className="absolute bottom-4 right-4 opacity-0 
            group-hover:opacity-100 transition-all duration-300"
                      >
                      </div>
                    </figure>

                    {/* Content */}
                    <div className="card-body p-5">
                      <h2
                        className="card-title text-xl font-bold 
            transition-colors duration-300 
            group-hover:text-[#ed2519]"
                      >
                        {project?.title}
                      </h2>

                      <p className="text-sm sm:text-base text-base-content/65 leading-relaxed line-clamp-3">
                        {project?.description}
                      </p>

                      <div className="divider my-1"></div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-2">

                        {/* Github */}
                        {project?.projectType !== "react" || (
                          <button
                            className="btn btn-sm btn-square 
              border-[#ed2519] text-[#ed2519]
              hover:bg-[#ed2519] hover:text-white 
              hover:border-[#ed2519] transition-all duration-300"
                          >
                            <BsGithub className="text-lg" />
                          </button>
                        )}

                        {/* Video */}
                        <a href={project?.link} target="_blank" rel="noopener noreferrer"
                          className="btn btn-sm btn-square 
              border-[#ed2519] text-[#ed2519]
              hover:bg-[#ed2519] hover:text-white 
              hover:border-[#ed2519] transition-all duration-300"
                        >
                          <VideoIcon className="text-lg" />
                        </a>

                        {/* Link */}
                        <button
                          type="button"
                          onClick={() => handleCopy(project?.link, index)}
                          className={`btn btn-sm ${copiedProject === index ? "px-1 gap-0.5" : "btn-square"} border-[#ed2519] text-[#ed2519] hover:bg-[#ed2519] hover:text-white hover:border-[#ed2519] transition-all duration-300`}
                        >
                          <LinkIcon className="text-lg" />
                          {copiedProject === index && (
                            <span className="text-[8px] whitespace-nowrap">Copied</span>
                          )}
                        </button>

                        {/* View */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="btn btn-sm ml-auto 
              bg-[#ed2519] text-white border-[#ed2519]
              hover:bg-[#c91d14] hover:border-[#c91d14]
              transition-all duration-300"
                        >
                          View
                        </button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        )}
        {value === 2 && (
          <Box p={3}>
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(project => project.projectType === "cms").map((project, index) => (
                  <div
                    key={index}
                    className="group card bg-base-200 shadow-md border border-[#ffff]/20 rounded-md
        hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
        overflow-hidden"
                  >
                    {/* Image */}
                    <figure className="relative overflow-hidden">
                      <img
                        src={project?.image}
                        alt={project?.title}
                        className="w-full h-52 sm:h-56 object-cover 
            transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Number */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="badge text-white border-none font-semibold"
                          style={{ backgroundColor: "#ed2519" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Hover View */}
                      <div
                        className="absolute bottom-4 right-4 opacity-0 
            group-hover:opacity-100 transition-all duration-300"
                      >
                      </div>
                    </figure>

                    {/* Content */}
                    <div className="card-body p-5">
                      <h2
                        className="card-title text-xl font-bold 
            transition-colors duration-300 
            group-hover:text-[#ed2519]"
                      >
                        {project?.title}
                      </h2>

                      <p className="text-sm sm:text-base text-base-content/65 leading-relaxed line-clamp-3">
                        {project?.description}
                      </p>

                      <div className="divider my-1"></div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-2">

                        {/* Github */}
                        {project?.projectType !== "react" || (
                          <button
                            className="btn btn-sm btn-square 
              border-[#ed2519] text-[#ed2519]
              hover:bg-[#ed2519] hover:text-white 
              hover:border-[#ed2519] transition-all duration-300"
                          >
                            <BsGithub className="text-lg" />
                          </button>
                        )}

                        {/* Video */}
                        <a href={project?.link} target="_blank" rel="noopener noreferrer"
                          className="btn btn-sm btn-square 
              border-[#ed2519] text-[#ed2519]
              hover:bg-[#ed2519] hover:text-white 
              hover:border-[#ed2519] transition-all duration-300"
                        >
                          <VideoIcon className="text-lg" />
                        </a>

                        {/* Link */}
                        <button
                          type="button"
                          onClick={() => handleCopy(project?.link, index)}
                          className={`btn btn-sm ${copiedProject === index ? "px-1 gap-0.5" : "btn-square"} border-[#ed2519] text-[#ed2519] hover:bg-[#ed2519] hover:text-white hover:border-[#ed2519] transition-all duration-300`}
                        >
                          <LinkIcon className="text-lg" />
                          {copiedProject === index && (
                            <span className="text-[8px] whitespace-nowrap">Copied</span>
                          )}
                        </button>

                        {/* View */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="btn btn-sm ml-auto 
              bg-[#ed2519] text-white border-[#ed2519]
              hover:bg-[#c91d14] hover:border-[#c91d14]
              transition-all duration-300"
                        >
                          View
                        </button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        )}
      </Box>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-base-100 p-4 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              className="btn btn-sm btn-circle absolute right-3 top-3"
            >
              X
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mb-5 h-44 w-full rounded-md object-cover sm:h-64"
            />
            <h2 className="mb-3 break-words text-xl font-bold sm:text-2xl">{selectedProject.title}</h2>
            <p className="mb-6 leading-relaxed text-base-content/75">
              {selectedProject.description}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#ed2519] text-white hover:bg-[#c91d14]"
            >
              Visit Live Site
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
