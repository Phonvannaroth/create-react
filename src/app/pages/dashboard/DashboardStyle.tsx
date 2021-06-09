/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    headBody: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FAFAFA',
        display: 'flex',
    },
    groupTextBody: {
        display: 'flex',
        flex: 1,
    },
    contentBody: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    emptyText: {
        color: 'rgba(0,0,0,.38)'
    },
    content: {
        paddingTop: 20,
        width: '100%',
        height: '100%',
    },
    mainTitle: {
        fontSize: 18,
        marginLeft: 30,
        marginRight: 30,
    },
    cards: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
    },
    button: {
        flex: 1,
        display: 'flex',
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 0.3,
        borderColor: '#C0C3C5',
        borderStyle: 'solid',
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: '#fff',
        justifyContent: 'left',
    },
    cardGroup: {
        display: 'flex',
        padding: 20,
    },
    icon: {
        color: '#96959A',
        width: 20,
    },
    groupText: {
        paddingLeft: 20,
        textAlign: 'left',
    },
    cardTitle: {
        marginTop: -10,
    },
    cardText: {
        color: '#96959A',
        paddingTop: 12,
        textTransform: 'capitalize',
    },
    body: {
        borderWidth: 0.3,
        borderColor: '#C0C3C5',
        borderStyle: 'solid',
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: '#fff',
        width: 800,
        alignItems: 'center',
    },
})

export default useStyle
