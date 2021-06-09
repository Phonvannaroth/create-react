/* eslint-disable prefer-template */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import * as Icon from "@material-ui/icons";
import { ButtonBase, makeStyles } from "@material-ui/core";
import { ALLOW_EXTENSIONS_PDF } from "app/dummy/config";
import { formatShotDate, formatSize } from "app/redux/service/format.service";
import modules from "app/modules";

interface Props {
  onChange?: (file: any) => void;
  style?: any;
  defaultValue?: any;
}
const UploadFile = (props: Props) => {
  const { defaultValue } = props;
  const classes = useStyle();
  const [file, setFile] = React.useState<any>();
  const [fileError, setFileError] = React.useState<any>(false);

  const _onChange = (e: any) => {
    setFileError(false);
    setFile(e.target.files[0]);
    const fileExtension = e.target.files[0]?.name.split(".").pop();
    if (!ALLOW_EXTENSIONS_PDF.includes(fileExtension)) {
      setFileError(true);
    }
    props.onChange(e.target.files[0]);
  };
  React.useEffect(() => {
    if (defaultValue) {
      setFile([defaultValue]);
    }
    return () => {};
  }, [defaultValue]);
  return (
    <>
      <div style={props.style} className={classes.container}>
        <div className={classes.containUploading}>
          <div className={classes.containInput}>
            <input
              accept=".xlsx, .xls, .csv, .pdf"
              type="file"
              className={classes.input}
              onChange={(e) => {
                _onChange(e);
              }}
            />
            <Icon.CloudUpload className={classes.iconUpload} />
            <span>Upload File</span>
          </div>
        </div>
        {!file ? null : (
          <div
            style={fileError ? { borderColor: modules.RED } : {}}
            className={classes.imageContainer}
          >
            <img
              className={classes.Image}
              src={fileError ? modules.FILE_ERROR : modules.FILE}
              alt=""
            />
            <div className={classes.containText}>
              <p>{file?.name ? file?.name : defaultValue}</p>
              {fileError ? (
                <p className={classes.textSmall} style={{ color: modules.RED }}>
                  The File must be the file type of .xlsx, .xls, .csv .pdf
                </p>
              ) : (
                <p className={classes.textSmall}>
                  {formatShotDate(file?.lastModified)}
                  {file?.size ? "-" + formatSize(file?.size) : null}
                </p>
              )}
            </div>
            <ButtonBase
              onClick={() => setFile(null)}
              className={classes.btnClose}
            >
              <Icon.Close />
            </ButtonBase>
          </div>
        )}
      </div>
    </>
  );
};
export default UploadFile;

const useStyle = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    paddingTop: modules.BODY_HORIZONTAL / 2,
    paddingBottom: modules.BODY_HORIZONTAL / 2,
    flexDirection: "column",
  },
  containUploading: {
    padding: modules.PADDING,
    flex: 1,
  },
  btnUpload: {
    paddingTop: modules.PADDING,
    paddingBottom: modules.PADDING,
    paddingLeft: modules.PADDING * 2,
    paddingRight: modules.PADDING * 2,
    borderRadius: modules.RADIUS_SMALL * 2,
    color: modules.WHITE,
    backgroundColor: modules.RED,
  },
  containInput: {
    backgroundColor: modules.BACKGROUND_COLOR,
    color: modules.TEXT_COLOR,
    overflow: "hidden",
    position: "relative",
    height: 45,
    width: 180,
    cursor: "pointer",

    borderRadius: modules.BORDER_RADIUS / 2,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 0,
    padding: 0,
    cursor: "pointer",
    opacity: 0,
    filter: "alpha(opacity=0)",
    width: "100%",
    height: "46px",
  },
  iconUpload: {
    marginLeft: modules.MARGIN,
    marginRight: modules.MARGIN,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: modules.RADIUS_SMALL,
    borderWidth: 1,
    borderColor: modules.BORDER_COLOR,
    borderStyle: "solid",
    alignItems: "center",
    marginRight: modules.MARGIN,
    marginLeft: modules.MARGIN,
    marginBottom: modules.MARGIN,
  },
  Image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    "&:hover": {
      backgroundColor: modules.BACKGROUND_FORM,
    },
  },
  containText: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginLeft: modules.MARGIN,
  },
  textSmall: {
    color: modules.SUB_TITLE,
    fontSize: modules.FONT_H5,
    marginTop: 4,
  },
  btnClose: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    color: modules.WHITE,
    backgroundColor: modules.SUB_TITLE,
    marginRight: modules.MARGIN,
  },
});
