import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div class="container section project-details">
      <div class="card z-depth-0">
        <div class="card-content">
          <span class="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            ducimus dignissimos. Sequi repellat saepe, fuga officiis architecto
            aliquid asperiores nesciunt possimus recusandae mollitia eum ipsam
            eveniet laudantium. At, quos nihil?
          </p>
        </div>
        <div class="card-action grey lighten-4 grey-text">
          <div>Posted by me</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
