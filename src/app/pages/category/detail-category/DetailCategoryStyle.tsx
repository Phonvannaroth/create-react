/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { makeStyles } from '@material-ui/core'
import modules from 'app/modules'
import { globalStyles } from 'app/style/globalStyles'

const useStyle = makeStyles({
    contianer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflow: "scroll",
        backgroundColor: modules.WHITE,
        padding: modules.PADDING
    },
    row: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
    },
    form: {
        flex: 1,
        backgroundColor: modules.WHITE,
        margin: modules.MARGIN,
        padding: modules.MARGIN * 2,
        borderRadius: modules.BORDER_RADIUS,
        borderColor: "#efefef",
        borderStyle: "solid",
        borderWidth: 1,
        ...globalStyles.shadow
    },
    containRight: {
        width: 280,
        margin: modules.MARGIN,
        // padding: modules.MARGIN * 2,
    },
    containPermission: {
        backgroundColor: modules.WHITE,
        marginBottom: modules.MARGIN * 2,
        padding: modules.MARGIN,
        borderRadius: modules.BORDER_RADIUS,
        borderColor: "#efefef",
        borderStyle: "solid",
        borderWidth: 1,
        ...globalStyles.shadow
    },
    textPublish: {
        fontSize: modules.FONT_H3,
        color: modules.LIGHT_BLACK,
        fontWeight: modules.FONT_BIG,
        marginBottom: modules.PADDING
    }
})

export default useStyle
