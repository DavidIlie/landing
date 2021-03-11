import React, { Component } from "react";
import Head from "next/head";
import Particles from "react-particles-js";

import style from "./app.module.css";

class Main extends Component {
  render() {
    return (
      <div className={style.app}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <title>David Ilie Apps Platform</title>
        </Head>
        <div className={style.wrapper}>
          <Particles
            params={{
              particles: {
                number: {
                  value: 75,
                  density: {
                    enable: false,
                  },
                },
              },
            }}
          />
          <h1 ref="h1Animation" className={style.text}>
            David Ilie Apps Platform
          </h1>
        </div>
      </div>
    );
  }
}

export default Main;
