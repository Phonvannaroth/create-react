import { Button, makeStyles } from '@material-ui/core'
import * as Icon from '@material-ui/icons';

const FooterScreen = () => {
    const classes = useStyle()
    return (
        <>
            <div className={classes.head} style={{ position: 'sticky' }}>
                <Button>
                    <Icon.Menu className={classes.icon} />
                </Button>
                <p className={classes.title} />
                <div className={classes.group}>
                    <Button>
                        <Icon.Notifications className={classes.icon} />
                    </Button>
                    <Button className={classes.btnLogout}>Logout</Button>
                </div>
            </div>
            <div className={classes.headSub} style={{ position: 'sticky' }}>

                <h1 className={classes.textHeader}>Directory</h1>

            </div>
        </>
    )
}

const useStyle = makeStyles({
    head: {
        height: 50,
        backgroundColor: '#2b2b2b',
        display: 'flex',
        alignItems: 'center',
        bottom: 0,
        zIndex: 100,
        paddingRight: 12,
        position: "fixed"
    },
    headSub: {
        height: 50,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        paddingRight: 12,
        paddingLeft: 12,
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 800,
        flex: 1,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 800,
    },
    group: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        paddingLeft: 12,
    },
    icon: {
        paddingLeft: 12,
        paddingRight: 12,
        color: '#fff',
    },
    btnLogout: {
        color: '#fff',
        paddingRight: 12
    }
})
export default FooterScreen
