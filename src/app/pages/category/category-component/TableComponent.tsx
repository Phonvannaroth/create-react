/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable function-paren-newline */
import React from "react";
import { makeStyles, } from "@material-ui/core/styles";
import { addDays } from "date-fns";
import { withWidth, Container, Button, Chip, ButtonGroup } from "@material-ui/core";
import modules from "app/modules";
import { formatDefaultDate, formatShotDate } from "app/redux/service/format.service";
import TextInputDate from "app/components/input/TextInputDate";
import TextInputSearch from "app/components/input/TextInputSearch";
import * as Icon from "@material-ui/icons";
import { globalStyles } from "app/style/globalStyles";
import MenuPopup from "app/components/pop-up/MenuPopup";

interface Props {
  data?: Array<any>;
  loading: boolean;
  onCreate: () => void;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
}

const TableComponent = (props: Props) => {
  const {
    data,
    onCreate,
    loading,
    onView,
    onEdit
  } = props;
  const classes = useStyles();

  const [showFilter, setShowFilter] = React.useState(false)
  const [toDate, setToDate] = React.useState(new Date());
  const [fromDate, setFromDate] = React.useState(addDays(new Date(), -30));
  const _onChangeToDate = (date: any) => {
    setToDate(date);
    if (new Date(fromDate) > new Date(toDate)) {
      setFromDate(addDays(new Date(date), -1));
    }
  };
  const _onChangeFromDate = (date: any) => {
    setFromDate(date);
  };
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const [item, setItem] = React.useState<any>();
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const _onView = () => {
    setAnchorEl(null);
    onView(item.key)
  };
  const _onEdit = () => {
    setAnchorEl(null);
    onEdit(item.key)
  };

  return (
    <>
      <div className={classes.containHeaderRow}>
        <Button
          variant="outlined" color="secondary"
          onClick={() => setShowFilter(!showFilter)}
          style={{ marginRight: modules.PADDING, borderRadius: modules.BORDER_RADIUS }}
        >
          <Icon.VerticalSplit />
        </Button>
        <Button
          style={{ borderRadius: modules.BORDER_RADIUS }}
          onClick={onCreate}
          variant="contained" color="secondary">
          Create
          <Icon.Add />
        </Button>
      </div>
      <Container maxWidth="xl">
        <div className={classes.container}>
          <div
            style={
              showFilter === true
                ? { height: "60px", transition: "0.3s" }
                : { height: "0px", transition: "0.3s" }
            }
            className={classes.containFilter}
          >
            <div className={classes.containRow}>
              <TextInputDate
                className={classes.date}
                value={formatDefaultDate(fromDate)}
                onChange={(e: any) => _onChangeFromDate(e.target.value)}
              />
              <span>To</span>

              <TextInputDate
                className={classes.date}
                defaultValue={formatDefaultDate(toDate)}
                onChange={(e) => _onChangeToDate(e.target.value)}
              />
              <button
                style={{
                  backgroundColor: modules.BLUE,
                  marginLeft: modules.MARGIN,
                  marginRight: modules.MARGIN
                }}
                type="button" className={"btn btn-success"}><i className={"fa fa-search"}></i></button>
              <button
                type="button"
                className={"btn "}><i className={"fa fa-eraser"}></i>
              </button>
            </div>

          </div>
          <div className={classes.containHeader}>

            <div className={classes.containRow}>
              <ButtonGroup disableElevation variant="contained" color="inherit">
                <Button
                  onClick={onCreate}
                  variant="contained" color="inherit">
                  Excel
                  <Icon.Description />
                </Button>
                <Button
                  onClick={onCreate}
                  variant="contained" color="inherit">
                  Print
                  <Icon.Print />
                </Button>
                <Button
                  onClick={onCreate}
                  variant="contained" color="inherit">
                  Reload
                  <Icon.Loop />
                </Button>
              </ButtonGroup>

            </div>
            <div style={{ flex: 1 }} />
            <div className={classes.containRow}>
              <span style={{ textAlign: "center", marginRight: 10 }}>Search:</span>
              <TextInputSearch
              // onChange={(e) => onSearch(e.target.value)}
              // style={{ width: "250" }}
              />
            </div>
          </div>
          <table>
            <thead>
              <tr style={{ height: 50 }}>
                <th>Category</th>
                <th>Status</th>
                <th>Created by</th>
                <th>Created at</th>
                <th>Updated by</th>
                <th>Updated at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.length > 0 ?
                  data.map((m: any, index: number) => {
                    return (
                      <tr key={index}>

                        <td style={{ minWidth: "300px", }}>
                          <div className={classes.conntainName}>
                            <img
                              src={m?.imageUrl ? m?.imageUrl : modules.NO_IMAGE}
                              className=" img-responsive"
                              alt="Product Image"
                              style={{ width: "50px", height: "50px", backgroundColor: modules.BACKGROUND_COLOR, borderRadius: "25px" }} />
                            <p className={classes.textName}>  {m?.name}</p>
                          </div>
                        </td>
                        <td>
                          <Chip
                            style={m?.status === "ACTIVE" ? { background: modules.LIGHT_BLUE, color: modules.WHITE } : { background: modules.DARK_YELLOW }}
                            // icon={<FaceIcon style={{ color: modules.WHITE }} />}
                            label={m?.status}
                          />

                        </td>
                        <td>
                          <Chip
                            icon={<Icon.HowToReg />}
                            label={m?.createdBy}
                          />
                        </td>
                        <td><small>{formatShotDate(m?.createdAt)}</small></td>
                        <td><small>{m?.updatedBy}</small></td>
                        <td><small>{formatShotDate(m?.updatedAt)}</small></td>
                        <td> <Button
                          onClick={(e) => {
                            handleMenu(e);
                            setItem(m);
                          }}
                          variant="outlined">
                          <Icon.MoreVert />
                        </Button> </td>
                      </tr>
                    )
                  })
                  : <div>
                    Loading...
                  </div>
              }

            </tbody>
          </table>
        </div>
        <MenuPopup
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          onView={_onView}
          onEdit={_onEdit}
        />
      </Container>
    </>
  );
};

export default withWidth()(TableComponent);

const useStyles = makeStyles({
  line: {
    color: modules.BACKGROUND_COLOR,
  },
  container: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "#efefef",
    padding: modules.MARGIN * 2,
    backgroundColor: modules.WHITE,
    borderRadius: modules.BORDER_RADIUS,
    ...globalStyles.shadow
  },
  conntainName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  table: {
    minWidth: 700,
  },
  textDate: {
    color: modules.SUB_TITLE,
    fontSize: modules.FONT_H6,
  },
  textName: {
    color: modules.LIGHT_BLACK,
    fontSize: modules.FONT_H4,
    fontWeight: modules.FONT_BIG,
    marginLeft: modules.PADDING / 2
  },
  menuItem: {
    marginTop: modules.PADDING / 2,
    marginBottom: modules.PADDING / 2,
  },
  iconMenuItem: {
    marginRight: modules.PADDING / 2,
  },
  containHeader: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: modules.MARGIN,

  },
  btbAdd: {
    height: modules.HEIGHT_BUTTON,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: modules.COLOR_MAIN,
    paddingLeft: modules.MARGIN,
    paddingRight: modules.MARGIN,
    borderRadius: modules.RADIUS_SMALL * 2,
    color: modules.COLOR_MAIN,
  },
  btbUpload: {
    height: modules.HEIGHT_BUTTON,
    backgroundColor: modules.SUB_TITLE,
    paddingLeft: modules.MARGIN,
    paddingRight: modules.MARGIN,
    borderRadius: modules.RADIUS_SMALL * 2,
    color: modules.WHITE,
    marginLeft: modules.PADDING,
  },
  containBtnFour: {
    backgroundColor: modules.BORDER_COLOR,
    borderRadius: modules.RADIUS_SMALL,
  },
  btbFour: {
    height: modules.HEIGHT_BUTTON,
    paddingLeft: modules.PADDING,
    paddingRight: modules.PADDING,
    borderRadius: modules.RADIUS_SMALL * 2,
    color: modules.TEXT_COLOR,
  },
  textBtn: {
    marginLeft: modules.PADDING / 2,
  },
  containRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  containHeaderRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: modules.PADDING * 2,
    marginBottom: modules.PADDING,
    marginTop: modules.PADDING,

  },
  containFilter: {
    transition: "0.3s",
    flexDirection: "row",
    alignItems: "center",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  containButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#EFEFEF',
    marginLeft: modules.MARGIN,
    borderRadius: 2,
    paddingLeft: modules.PADDING / 2,
    paddingRight: modules.PADDING / 2,
    paddingTop: modules.PADDING / 4,
    paddingBottom: modules.PADDING / 4,

  },
  inputSearch: {
    height: 30,
    borderColor: modules.BORDER_COLOR,
    borderRadius: modules.RADIUS_SMALL * 2,
    marginLeft: modules.PADDING,
  },
  selectEntries: {
    margin: modules.PADDING,
    marginRight: modules.PADDING,

    height: "30px",
  },
  containFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: modules.MARGIN,
  },
  textPagination: {
    color: modules.SUB_TITLE,
    flex: 1,
  },
  textStatus: {
    textAlign: "center",
    color: modules.WHITE,
    borderRadius: modules.RADIUS_SMALL,
  },
  textNoData: {
    margin: modules.MARGIN,
    fontSize: modules.FONT_H5,
    color: modules.SUB_TITLE,
  },
  containCategory: {
    borderRadius: 50,
    backgroundColor: modules.DARK_YELLOW,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: modules.WHITE,
    paddingLeft: 8,
    paddingRight: 8,
    maxWidth: "100px"
  },
  containFooterRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: modules.PADDING
  },
  date: {
    maxWidth: 250,
    margin: modules.MARGIN,

  }
});
