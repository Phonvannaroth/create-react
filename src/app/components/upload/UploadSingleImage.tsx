/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
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
// import * as Icon from "@material-ui/icons";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { ButtonBase, makeStyles } from "@material-ui/core";
import FileImage from "../svg/FileImage"
import modules from "../../modules";
import { formatShotDate, formatSize } from "../../redux/service/format.service";
import UploadProgress from "./UploadProgress"

interface Props {
  title?: any;
  onChange?: (image: any) => void;
  image?: any;
  style?: any;
  fullButton?: boolean;
  defaultValue?: any;
}
const UploadSingleImage = (props: Props) => {
  const [images, setImages] = React.useState<any>([{ dataURL: "" }]);
  const { defaultValue } = props;
  const maxNumber = 69;

  const _onChange = (imageList: ImageListType) => {
    console.log(`imageList`, imageList)
    setImages([{ dataURL: "" }]);
    setTimeout(() => {
      setImages(imageList);
    }, 1200);
  };
  React.useEffect(() => {
    if (defaultValue?.imageUrl) {
      setImages(defaultValue);
    }

    return () => { };
  }, [defaultValue]);

  const _onClear = () => {
    setImages([{ dataURL: "" }]);
  };

  const classes = useStyle();
  return (
    <>
      <p className={classes.textLabel}>Image</p>
      <ImageUploading
        acceptType={["png", "PNG", "jpg", "JPG"]}
        value={images}
        onChange={_onChange}
        maxNumber={maxNumber}
      >
        {({ onImageUpload }) => (
          <div style={props.style} className={classes.container}>

            {images[0]?.dataURL ? (
              <div className={classes.imageContainer}>
                <div
                  onError={(e: any) => (
                    (e.target.onerror = null), (e.target.src = modules.NO_USER)
                  )}
                  className={classes.Image}
                  style={{
                    backgroundImage: `url(${images[0]?.dataURL})`,
                    backgroundSize: "contain",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    color: "rgba(255,255,255,0.7)",

                  }}
                >

                </div>
                <div className={classes.containText}>
                  <p style={{ marginTop: 12 }}>{images[0]?.file?.name}</p>
                  <p className={classes.textSmall}>
                    {formatShotDate(images[0]?.file?.lastModified)} -
                    {formatSize(images[0]?.file?.size)}
                  </p>
                  <UploadProgress
                    image={images[0]?.file}
                    onClick={_onClear}
                    onChange={(img) => props.onChange(img)}
                  />

                </div>
              </div>
            ) : (
              <div>
                {images?.imageUrl ? (
                  <div className={classes.imageContainer}>
                    <ButtonBase
                      onClick={onImageUpload}
                    >
                      <img
                        onError={(e: any) => (
                          (e.target.onerror = null),
                          (e.target.src = modules.NO_USER)
                        )}
                        className={classes.Image}
                        src={images?.imageUrl}
                        alt=""
                      />
                    </ButtonBase>
                    <div className={classes.containText}>
                      <p className={classes.textSmall}>{images?.imageUrl}</p>
                    </div>
                  </div>
                ) : <ButtonBase
                  style={
                    props.fullButton
                      ? { width: "100%", justifyContent: "flex-start" }
                      : {}
                  }
                  onClick={onImageUpload}
                  className={classes.btnUploadLogo}
                >
                  <FileImage />
                  <div>
                    <p className={classes.textSelect}>Select Image</p>
                    <p className={classes.textUploadLogo}>Click browe through your machine</p>
                  </div>

                </ButtonBase>
                }
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </>
  );
};
export default UploadSingleImage;

const useStyle = makeStyles({
  imageHolder: {
    width: modules.VIEW_PORT_WIDTH / 11,
    height: modules.VIEW_PORT_WIDTH / 11,
  },
  editBtn: {
    position: "absolute",
  },
  title: {
    fontSize: modules.FONT_H4,
    color: modules.TITLE,
    paddingBottom: modules.BODY_HORIZONTAL / 2,
  },
  container: {
    width: "100%",
    display: "flex",
    paddingBottom: modules.BODY_HORIZONTAL / 2,
    flexDirection: "column",
  },
  updateBtn: {
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: modules.BORDER_RADIUS,
    borderWidth: 1,
    borderColor: modules.BORDER_COLOR,
    borderStyle: "solid",
    marginTop: modules.MARGIN,
  },
  Image: {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    backgroundColor: modules.BACKGROUND_FORM,
    "&:hover": {
      backgroundColor: modules.BACKGROUND_FORM,
    },
    borderRadius: modules.BORDER_RADIUS,
  },
  btnUploadLogo: {
    height: 250,
    width: "100%",
    backgroundColor: modules.BACKGROUND_FORM,
    paddingRight: modules.PADDING * 2,
    paddingLeft: modules.PADDING * 2,
    borderRadius: modules.RADIUS_SMALL * 2,
    color: modules.TEXT_COLOR,
    marginTop: modules.PADDING
  },
  btnClose: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    color: modules.WHITE,
    backgroundColor: modules.RED,
    marginRight: modules.MARGIN,
  },
  textUploadLogo: {
    marginLeft: modules.PADDING,
  },
  containText: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: modules.MARGIN,
    height: 250,
    width: "100%",

  },
  textSmall: {
    color: modules.SUB_TITLE,
    fontSize: modules.FONT_H5,
    marginTop: 4,
    marginRight: modules.PADDING,
    flex: 1
  },
  textSelect: {
    color: modules.LIGHT_BLACK,
    fontWeight: modules.FONT_BIG,
    fontSize: modules.FONT_H2
  },
  textLabel: {
    color: modules.TEXT_COLOR,
  },
  btnClear: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: modules.RED,
    color: modules.WHITE,
    paddingLeft: modules.PADDING * 2,
    paddingRight: modules.PADDING * 2,
    borderRadius: 20,
    marginTop: modules.PADDING,
    marginBottom: modules.PADDING,
    fontSize: modules.FONT_H5,

  }
});
