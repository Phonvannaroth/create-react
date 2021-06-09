/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, MenuItem } from '@material-ui/core';
import { PageHeaderComponent } from 'app/components';
import { IPayloadCreateNewCategory } from 'app/redux/interface/category.interfac';
import TextInput from 'app/components/input/TextInput';
import SelectOption from 'app/components/select/SelectOption';
import UploadSingleImage from 'app/components/upload/UploadSingleImage';
import { STATUS } from 'app/dummy/status';
import modules from 'app/modules';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import useStyle from './DetailCategoryStyle';

interface Props {
    route: any,
    account: any,
    progress: boolean,
    onCreateNewCategory: (payload: IPayloadCreateNewCategory) => void
}

const DetailCategoryScreen = (props: Props) => {
    const classes = useStyle();
    const navigate = useNavigate()
    const [image, setImage] = React.useState(null)
    const { route, onCreateNewCategory, account, progress } = props
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        const payload: IPayloadCreateNewCategory = {
            name: data.name,
            description: data.description,
            image,
            status: data.status,
            account,
            navigate
        }
        onCreateNewCategory(payload)
    };

    return (
        <div className={classes.contianer}>
            <PageHeaderComponent
                title="Edit Category"
                route={route}
            />
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={classes.row}>

                    <div className={classes.form}>
                        <TextInput
                            label="Name"
                            name="name"
                            id="name"
                            error={errors.name}
                            {...register("name", { required: true })}
                        />
                        <TextInput
                            label="Description"
                            multiline
                            rows={8}
                            name="description"
                            id="description"
                            error={errors.description}
                            {...register("description", { required: true })}
                        />
                        <UploadSingleImage
                            title="Image"
                            onChange={(img) => setImage(img)}

                        />
                    </div>
                    <div className={classes.containRight}>
                        <div className={classes.containPermission}>
                            <p className={classes.textPublish}>Publish</p>

                            <SelectOption
                                autoComplete="off"
                                label="Status"
                                name="status"
                                select
                                id="status"
                                error={errors.status}
                                {...register("status", { required: true })}
                            >
                                {STATUS.map((item: any, index: any) => {
                                    return (
                                        <MenuItem key={index} value={item}>
                                            {item}
                                        </MenuItem>
                                    );
                                })}
                            </SelectOption>

                        </div>

                        <Button style={{ width: "47%", marginRight: modules.PADDING, borderRadius: modules.BORDER_RADIUS }} variant="outlined" color="secondary">Cancel</Button>
                        <Button
                            disabled={progress}
                            type="submit"
                            style={{ width: "47%", borderRadius: modules.BORDER_RADIUS }}
                            variant="contained"
                            color="primary">
                            {
                                progress ?
                                    "Saving..."
                                    : "Save"
                            }

                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DetailCategoryScreen
