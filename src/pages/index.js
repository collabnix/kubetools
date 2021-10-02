import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contributors from "../components/Contributors";
import BrowserExtensions from "../components/BrowserExtensions";
import { Link } from "gatsby";
const Index = ({ location }) => {
  return (
    <Layout location={location} title="A Web Developer's Browser">
      <SEO title="A Web Developer's Browser" location={location} />
      <>
        <section
          id="Home"
          className="bg-primary-3 text-light text-center has-divider header-desktop-app"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-8 col-md-9">
                <h1 className="display-3">
                  Develop responsive web apps 5x faster!
                </h1>
                <p className="lead">
                  A must-have DevTool for all Front-End developers that will
                  make your job easier.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center mt-4">
                  <Link
                    to="/download"
                    className="btn btn-lg btn-outline-primary mx-2"
                  >
                    <span>Download now and use it for free!</span>
                  </Link>
                </div>
                <div className="d-block d-sm-block d-md-block d-lg-none flex-column flex-sm-row justify-content-center mt-4 ">
                  <a
                    className="ml-lg-3"
                    href="https://www.producthunt.com/posts/responsively?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-responsively"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=200375&theme=light&period=daily"
                      alt="Responsively - Develop responsive web-apps 5x faster! | Product Hunt Embed"
                      style={{ width: 250, height: 50 }}
                      width="250px"
                      height="50px"
                    />
                  </a>
                </div>
                <div className="d-block d-sm-block d-md-block d-lg-none flex-column flex-sm-row justify-content-center mt-4 ">
                  <iframe
                    title="Github Stars"
                    src="https://ghbtns.com/github-btn.html?user=responsively-org&amp;repo=responsively-app&amp;type=star&amp;count=true"
                    frameBorder="0"
                    scrolling="0"
                    width="100px"
                    width="120px"
                    height="30px"
                  ></iframe>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-center mt-6"
              data-aos="fade-up"
              data-delay="100"
            >
              <div className="col-lg-10">
                <img
                  src="/assets/img/screenshot.png"
                  alt="Screenshot"
                  className="rounded screenshot-img"
                />
              </div>
            </div>
          </div>
          <div className="divider">
            <img
              src="/assets/img/dividers/divider-2.svg"
              alt="graphical divider"
              data-inject-svg
            />
          </div>
        </section>
        <section id="Benefits">
          <div className="container">
            <div className="row mb-4 text-center">
              <div className="col">
                <h2 className="h1">Web Engineering cannot get any easier!</h2>
              </div>
            </div>
            <div className="row text-center justify-content-center">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-round bg-primary mx-auto mb-4">
                  <img
                    className="icon bg-primary"
                    src="/assets/img/icons/custom/devices-preview.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </div>
                <h4>Instant Preview</h4>
                <p className="lead mx-xl-3">
                  Preview all target screens in a single window side-by-side.
                  <br />
                  Brings down your development time!
                </p>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-round bg-primary mx-auto mb-4">
                  <img
                    className="icon bg-primary"
                    src="/assets/img/icons/theme/code/code.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </div>
                <h4>Developer First</h4>
                <p className="lead mx-xl-3">
                  Use your already-familiar dev-tools from the browser.
                  <br />
                  No additional learning curve!
                </p>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-round bg-primary mx-auto mb-4">
                  <img
                    className="icon bg-primary"
                    src="/assets/img/icons/social/github.svg"
                    alt="icon"
                    data-inject-svg
                  />
                </div>
                <h4>Open source</h4>
                <p className="lead mx-xl-3">
                  Lets improve it together!
                  <br />
                  Your contributions are welcome&nbsp;
                  <a
                    href="https://github.com/responsively-org/responsively-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="has-divider bg-primary-2-alt">
          <div className="divider flip-y">
            <img
              src="/assets/img/dividers/divider-2.svg"
              alt="graphical divider"
              data-inject-svg
            />
          </div>
          <div className="container pt-3 pb-0">
            <div className="row justify-content-center text-center mb-6">
              <div className="col-xl-11 col-lg-9">
                <h2 className="display-4 mx-xl-6">
                  It's really clear that the most precious resource we all have
                  is Time.
                </h2>
                <h2 className="display-4 mx-xl-6">- Steve Jobs</h2>
                <h2 className="display-5 mx-xl-6">
                  So let's use it wisely.{" "}
                  <span role="img" aria-label="sunglases">
                    😎
                  </span>
                </h2>
                <p className="lead"></p>
              </div>
            </div>
          </div>
          <div className="divider flip-x">
            <img
              src="/assets/img/dividers/divider-3.svg"
              alt="graphical divider"
              data-inject-svg
            />
          </div>
        </section>
        <section id="Features">
          <div className="container">
            <div className="row align-items-center justify-content-around o-hidden">
              <div
                className="col-md-6 col-lg-8 mb-4 mb-md-0"
                data-aos="fade-right"
              >
                <video
                  className="video-preview"
                  autoPlay
                  loop
                  muted
                  playsInline
                  name="media"
                >
                  <source
                    src="https://responsively-org.github.io/responsively-app/assets/video/mirrored-interactions.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-left">
                <h3 className="h2">Mirrored Interactions</h3>
                <p className="lead">
                  Any click, scroll or navigation that you perform in one device
                  will be replicated to all devices in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row align-items-center justify-content-around flex-row-reverse o-hidden">
              <div
                className="col-md-6 col-lg-8 mb-4 mb-md-0"
                data-aos="fade-left"
              >
                <video
                  className="video-preview"
                  autoPlay
                  loop
                  muted
                  playsInline
                  name="media"
                >
                  <source
                    src="https://responsively-org.github.io/responsively-app/assets/video/customizable-layouts.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-right">
                <h3 className="h2">Customizable Layout</h3>
                <p className="lead">
                  Customize the arrangement of the devices to suit your every
                  need.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row align-items-center justify-content-around o-hidden">
              <div
                className="col-md-6 col-lg-8 mb-4 mb-md-0"
                data-aos="fade-right"
              >
                <video
                  className="video-preview"
                  autoPlay
                  loop
                  muted
                  playsInline
                  name="media"
                >
                  <source
                    src="https://responsively-org.github.io/responsively-app/assets/video/elements-inspector.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-left">
                <h3 className="h2">Awesome Elements Inspector</h3>
                <p className="lead">
                  Inspect any element in any device with just one click. No
                  Hassle!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row align-items-center justify-content-around flex-row-reverse o-hidden">
              <div
                className="col-md-6 col-lg-8 mb-4 mb-md-0"
                data-aos="fade-left"
              >
                <video
                  className="video-preview"
                  autoPlay
                  loop
                  muted
                  playsInline
                  name="media"
                >
                  <source
                    src="https://responsively-org.github.io/responsively-app/assets/video/extensible-devices.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-right">
                <h3 className="h2">Extensive Built-in Device Profiles</h3>
                <p className="lead">
                  Has 30+ built-in device profiles covering all major devices.
                  You can even add new custom device profiles as you like.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row align-items-center justify-content-around o-hidden">
              <div
                className="col-md-6 col-lg-8 mb-4 mb-md-0"
                data-aos="fade-right"
              >
                <video
                  className="video-preview"
                  autoPlay
                  loop
                  muted
                  playsInline
                  name="media"
                >
                  <source
                    src="https://responsively-org.github.io/responsively-app/assets/video/one-click-screenshot.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-left">
                <h3 className="h2">One-Click Screenshot</h3>
                <p className="lead">
                  Get instant feedback on the pages that you develop with the
                  powerful screenshots tool. Take full page screenshot of all
                  devices or a specific device with just a single click!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row align-items-center justify-content-around flex-row-reverse o-hidden">
              <div
                className="col-md-6 col-lg-8 mb-4 mb-md-0"
                data-aos="fade-right"
              >
                <video
                  className="video-preview"
                  autoPlay
                  loop
                  muted
                  playsInline
                  name="media"
                >
                  <source
                    src="https://responsively-org.github.io/responsively-app/assets/video/hot-reloading.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-right">
                <h3 className="h2">Hot-Reloading Supported</h3>
                <p className="lead">
                  Does your development server support Hot-Reloading? Then we do
                  too! Hot-Reload all devices in real-time for every save.
                </p>
              </div>
            </div>
          </div>
        </section>
        <BrowserExtensions />
        <Contributors />
      </>
    </Layout>
  );
};
export default Index;
