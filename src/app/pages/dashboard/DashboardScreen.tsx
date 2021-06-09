/* eslint-disable react/jsx-indent */
import * as React from "react";
import { Button } from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import useStyle from "./DashboardStyle";

const DashboardScreen = () => {
  const classes = useStyle();
  return (
    <div className={classes.content}>
      <h2 className={classes.mainTitle}>Overview</h2>
      <div className={classes.cards}>
        <Button className={classes.button}>
          <div className={classes.cardGroup}>
            <Icon.PowerOffOutlined className={classes.icon} />
            <div className={classes.groupText}>
              <h1 className={classes.cardTitle}>2873082</h1>
              <p className={classes.cardText}>New Subscribers</p>
            </div>
          </div>
        </Button>
        <Button className={classes.button}>
          <div className={classes.cardGroup}>
            <Icon.PowerOffOutlined className={classes.icon} />
            <div className={classes.groupText}>
              <h1 className={classes.cardTitle}>2873082</h1>
              <p className={classes.cardText}>New Article</p>
            </div>
          </div>
        </Button>
        <Button className={classes.button}>
          <div className={classes.cardGroup}>
            <Icon.PowerOffOutlined className={classes.icon} />
            <div className={classes.groupText}>
              <h1 className={classes.cardTitle}>2873082</h1>
              <p className={classes.cardText}>All Chatting</p>
            </div>
          </div>
        </Button>
        <Button className={classes.button}>
          <div className={classes.cardGroup}>
            <Icon.PowerOffOutlined className={classes.icon} />
            <div className={classes.groupText}>
              <h1 className={classes.cardTitle}>2873082</h1>
              <p className={classes.cardText}>Order</p>
            </div>
          </div>
        </Button>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 150 }}
      >
        <div className={classes.body}>
          <div className={classes.headBody}>
            <div className={classes.groupTextBody}>
              <Icon.Search style={{ color: "rgba(0,0,0,.38)", width: 20 }} />
              <h2
                style={{
                  fontSize: 14,
                  color: "rgba(0,0,0,.38)",
                  paddingLeft: 12,
                  paddingTop: 6,
                }}
              >
                Search by email address, phone number, or user UID
              </h2>
            </div>
            <Button
              style={{
                backgroundColor: "#1873E8",
                border: 0,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                color: "#fff",
                borderRadius: 6,
                borderStyle: "none",
              }}
            >
              Add user
            </Button>
          </div>
          <div className={classes.contentBody}>
            <p className={classes.emptyText}>No users for this project yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
