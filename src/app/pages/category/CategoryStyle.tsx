/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { makeStyles } from '@material-ui/core'
import modules from 'app/modules'

const useStyle = makeStyles({
    contianer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflow: "scroll",
        padding: modules.PADDING
    }
})

export default useStyle
