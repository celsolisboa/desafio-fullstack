import React from "react";
import { Link } from "react-router-dom";
import { logout, getToken } from "../../services/auth";

import {Card, CardColumns, Form, Col, Button} from 'react-bootstrap'

import api from "../../services/api";

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import MaskedFormControl from 'react-bootstrap-maskedinput'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  exitButton: {
    marginRight: 36,
    position: 'right',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  linkButton: {
    textDecoration: 'none',
    color: theme.palette.background.default
  },
}));

export default function MiniDrawer() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuOption, setMenuOption] = React.useState(1);
  const [list, setList] = React.useState([]);
  const [course, setCourse] = React.useState({
    name: "",
    teachers: [],
    rooms: [],
    initialHour: "",
    finalHour: ""
  })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLista = () => {
    handleData();
    setMenuOption(1);
  };

  const handleCursos = () => {
    setMenuOption(2);
  };

  const handleData = async () => {
    const token = getToken();
    const response = await api.get("/courses", {
      headers: {
        'Authorization': `Basic ${token}` 
      }});

    setList(response.data)

    console.log(response)
  }

  const optionsTeachers = [
    {teacher: 'Álvaro de Azevedo'},
    {teacher: 'Mario de Andrade'},
    {teacher: 'Ruy Barbosa'},
    {teacher: 'Agatha Christie'},
    {teacher: 'Mario Quintana'},
  ]

  const optionsRooms = [
    {room: '101'},
    {room: '102'},
    {room: '103'},
    {room: '104'},
    {room: '105'},
    {room: '201'},
    {room: '202'},
    {room: '203'},
    {room: '204'},
    {room: '205'},
    {room: '301'},
    {room: '302'},
    {room: '303'},
    {room: '304'},
    {room: '305'},
    {room: '401'},
    {room: '402'},
    {room: '403'},
    {room: '404'},
    {room: '405'},
    {room: '501'},
    {room: '502'},
    {room: '503'},
    {room: '504'},
    {room: '505'},
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={handleLista} key={"Lista de Cursos"}>
            <ListItemIcon>
              <ListAltTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary={"Lista de Cursos"} />
          </ListItem>
          <ListItem button onClick={handleCursos} key={"Cursos"}>
            <ListItemIcon>
              <SchoolTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary={"Cursos"} />
          </ListItem>
          <Divider />
          <Link to="/" onClick={logout} className={classes.link}>
            <ListItem button key={"Sair"} onClick={logout}>
              <ListItemIcon>
                  <MeetingRoomTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={"Sair"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { menuOption === 1 ?
          <CardColumns>
            {list.map(({id, name, teachers, rooms, initialHour, finalHour}, index) => (
              <Card style={{ width: '25rem' }}>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                  <Card.Title>Prof. {teachers.toString()}</Card.Title>
                  <Card.Text>
                    Sala {rooms.toString()}
                  </Card.Text>
                  <Card.Text>
                    {initialHour} às {finalHour}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        :
          <Form>
            <Form.Row>
              <Col xs={6}>
                <Form.Group controlId="formGridName">
                  <Form.Label>Nome do Curso</Form.Label>
                  <Form.Control
                    type="text" 
                    placeholder="Nome do Curso"
                    name="name"
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group controlId="formGridTeachers">
                  <Form.Label>Professores</Form.Label>
                  <Form.Control 
                    as="select"
                    name="teachers"
                  >
                    <option>Choose...</option>
                    {optionsTeachers.map(({teacher}, index) => (
                      <option>{teacher}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={4}>
                <Form.Group controlId="formGridRooms">
                  <Form.Label>Salas</Form.Label>
                  <Form.Control as="select" >
                    <option>Choose...</option>
                    {optionsRooms.map(({room}, index) => (
                      <option>{room}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group controlId="formGridInitialHour">
                  <Form.Label>Inicio</Form.Label>
                  <MaskedFormControl type="text" placeholder="Inicio" mask="11:11" />
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group controlId="formGridFinalHour">
                  <Form.Label>Fim</Form.Label>
                  <MaskedFormControl type="text" placeholder="Fim" mask="11:11" />
                </Form.Group>
              </Col>
            </Form.Row>

            <Button type="submit">
              Gravar
            </Button>
          </Form>
        }
      </main>
    </div>
  );
}