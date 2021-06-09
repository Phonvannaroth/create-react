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
import ImageUploading, { ImageListType } from "react-images-uploading";
import { ButtonBase, makeStyles } from "@material-ui/core";
import modules from "../../modules";
import { formatShotDate, formatSize } from "../../redux/service/format.service";

interface Props {
  title?: any;
  onChange?: (image: any) => void;
  image?: any;
  style?: any;
  fullButton?: boolean;
  defaultValue?: any;
}
const UploadMultiImage = (props: Props) => {
  const [images, setImages] = React.useState<any>();
  const { defaultValue } = props;
  const maxNumber = 69;

  const _onChange = (imageList: ImageListType) => {
    setImages(imageList);
    const data = imageList.map((m: any) => {
      return m.file;
    });
    props.onChange(data);
  };
  React.useEffect(() => {
    if (defaultValue) {
      setImages(defaultValue);
    }

    return () => {};
  }, [defaultValue]);

  const _onClear = (item: any) => {
    console.log(`item`, item);
    const data = images.filter((m: any) => {
      return m.file?.name !== item.file?.name;
    });
    setImages(data);
  };

  const classes = useStyle();
  return (
    <>
      <ImageUploading
        acceptType={["png", "PNG", "jpg", "JPG"]}
        value={images}
        onChange={_onChange}
        maxNumber={maxNumber}
      >
        {({ onImageUpload }) => (
          // write your building UI
          <div style={props.style} className={classes.container}>
            <ButtonBase
              style={
                props.fullButton
                  ? { width: "100%", justifyContent: "flex-start" }
                  : {}
              }
              onClick={onImageUpload}
              className={classes.btnUploadLogo}
            >
              <Icon.Image />
              <p className={classes.textUploadLogo}>Upload Banner</p>
            </ButtonBase>
            {images?.length > 0
              ? images.map((m: any) => {
                  return (
                    <div className={classes.imageContainer}>
                      <img
                        onError={(e: any) => (
                          (e.target.onerror = null),
                          (e.target.src = modules.NO_USER)
                        )}
                        className={classes.Image}
                        src={m?.dataURL ? m?.dataURL : m?.imagePath}
                        alt=""
                      />
                      <div className={classes.containText}>
                        {m?.imagePath ? (
                          <p className={classes.textSmall}>{m?.imagePath}</p>
                        ) : (
                          <p>{m?.file?.name}</p>
                        )}
                        {m?.imagePath ? null : (
                          <p className={classes.textSmall}>
                            {formatShotDate(m?.file?.lastModified)} -
                            {formatSize(m?.file?.size)}
                          </p>
                        )}
                      </div>
                      <ButtonBase
                        onClick={() => _onClear(m)}
                        className={classes.btnClose}
                      >
                        <Icon.Close />
                      </ButtonBase>
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </ImageUploading>
    </>
  );
};
export default UploadMultiImage;

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
    paddingTop: modules.BODY_HORIZONTAL / 2,
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
    borderRadius: modules.RADIUS_SMALL,
    borderWidth: 1,
    borderColor: modules.BORDER_COLOR,
    borderStyle: "solid",
    alignItems: "center",
    marginTop: modules.MARGIN,
  },
  Image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    backgroundColor: modules.BACKGROUND_FORM,
    "&:hover": {
      backgroundColor: modules.BACKGROUND_FORM,
    },
  },
  btnUploadLogo: {
    height: modules.HEIGHT_BUTTON,
    width: "200px",
    backgroundColor: modules.BACKGROUND_FORM,
    paddingRight: modules.PADDING * 2,
    paddingLeft: modules.PADDING * 2,
    borderRadius: modules.RADIUS_SMALL * 2,
    color: modules.TEXT_COLOR,
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
    flexDirection: "column",
    marginLeft: modules.MARGIN,
  },
  textSmall: {
    color: modules.SUB_TITLE,
    fontSize: modules.FONT_H5,
    marginTop: 4,
    marginRight: modules.PADDING,
  },
});
