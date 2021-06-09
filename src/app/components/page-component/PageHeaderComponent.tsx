/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import modules from "app/modules";
import { Breadcrumbs, LinearProgress, withWidth } from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {
  width?: any;
  title: string;
  route?: Array<any>;
  progress?: boolean;
}

const PageHeaderComponent = (props: Props) => {
  const { title, route, progress } = props;
  const classes = useStyles();

  return (
    <div>

      {progress ? <LinearProgress /> : null}
      <div
        className={classes.container}
      >
        {title ? <p className={classes.textTitle}>{title}</p> : null}

        <Breadcrumbs
          separator="•"
          maxItems={2}
          aria-label="breadcrumb">
          {route
            ? route.map((m: any, index: number) => {
              if (index === 0) {
                return (
                  <Link className={classes.textLink} to={m.route}>
                    {m.name}
                  </Link>
                );
              } else {
                return <p className={classes.textInactive}>{m.name}</p>;
              }
            })
            : null}
        </Breadcrumbs>
      </div>

    </div>
  );
};

export default withWidth()(PageHeaderComponent);

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: modules.MARGIN,
  },
  textTitle: {
    fontWeight: modules.FONT_BIG,
    fontSize: modules.FONT_H3,
    color: modules.LIGHT_BLACK,
    flex: 1,
    marginBottom: modules.PADDING
  },
  textLink: {
    fontSize: modules.FONT_H5,
    fontWeight: modules.FONT_LARGE,
    color: modules.LIGHT_BLACK,
    textDecoration: "none",
  },
  textInactive: {
    fontSize: modules.FONT_H5,
    fontWeight: modules.FONT_LARGE,
    color: modules.SUB_TITLE,
    textDecoration: "none",
  },
});
