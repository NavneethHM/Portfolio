import "./resume.scss";

function Resume() {
  return (
    <>
      <div>
        <div className="container row p-4">
          <div className="resume_text">Resume</div>
          <p className="p-3">
            Currently gaining valuable experience through an internship in the
            field of Web Development, where I am actively applying my skills in
            HTML, CSS , JS , React J S, where developing the multiple Web Pages
            using these skills with guidance of the employees. This experience
            has boosting me to go deeper & advancing my skills.{" "}
          </p>
          <div className="col-6">
            <div>
              <h1 className="p-1"> Personal</h1>
              <p></p>
              <div className="p-1">
                Address : # Vishweshwaraiah Exte-, Salagame Road , Hassan ,
                Karnataka
              </div>
              <div className="p-1">Ph No : 9035116251</div>
              <div className="p-1">email: hm.navneethhm@gmail.com</div>
            </div>
            <div>
              <div>
                <h1 className=" mt-3">Education</h1>
                <div className="p-1">
                  <div className="fw-bold">
                    BE in Electronics & Instrumention
                  </div>
                  {/* <div>2020-2024</div> */}
                  <div>From Maland College Of Engineering ( 2020-2024 ) </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="p-1">
                    <div className="fw-bold">PUC (10+2)</div>
                    {/* <div>2018-2020</div> */}
                    <div>From Masters PU College ( 2018-2020 )</div>
                  </div>
                </div>
                <div>
                  <div className="p-1">
                    <div className="fw-bold">SSLC</div>
                    {/* <div>2017-2018</div>  */}
                    <div>
                      From Sree Ramakunjeshwara English Medium School (
                      2017-2018 ){" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div></div>
            <h1 className="p-1">Professional </h1>

            <div className="p-2">
              <div className="fw-bold">
                Hindustan Aeronautics Limited - HAL{" "}
              </div>
              <div>Mission & Combat System Research & Design Center Intern</div>
              <div>Feb 2024 - Mar 2024</div>
              <div>
                {" "}
                Evaluated equipment performance under various environmental
                conditions and pressure scenarios.
              </div>
            </div>
            <div>
              <div className="p-2">
                <div className="fw-bold">e2eHiring Private Limited </div>
                <div>Web Development Intern</div>
                <div>Apr 2024 - Present</div>
                <div>
                  {" "}
                  Assisted in the development of responsive web applications
                  using HTML, CSS, JavaScript, React and there tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resume;
