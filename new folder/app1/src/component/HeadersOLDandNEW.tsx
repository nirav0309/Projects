/*----------------------------new header ---------------------------------------------------------------------------*/

// import React, { useState, MouseEvent } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import Container from "@mui/material/Container";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import Divider from "@mui/material/Divider";
// import { Badge } from "@mui/material";
// import styled from "@emotion/styled";
// import ModalComponent from '../../Core/ModalComponent';
// import UPMModal from '../UPM';
// import { useSelector } from "react-redux";
// import { manageDelegatesInterFace } from '../../../types/expense/userProfileTypes';
// import { toast } from '../../../types/ccm/common';
// import Toast from '../../Core/Toast';
// import { upmGQL } from '../../../graphqlOperations';
// import { Link } from "react-router-dom";
// import Questions from "./QuestionsPage";
// import ButtonComponent from "../../Core/ButtonComponent";

// const Index: React.FC = () => {
//     const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
//     const [arrowDown, setArrowDown] = useState(true);
//     const { manageDelegateTab } = useSelector((state: any) => state.upm);
//     const [userProfileModal, setUSerProfileModal] = useState<boolean>(false);

//     const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
//         setAnchorElUser(event.currentTarget);
//         setArrowDown(!arrowDown);
//     };
//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//         setArrowDown(true);
//     };
//     const [toastData, setToastData] = useState<toast>({
//         toastOpen: false,
//         messageApi: '',
//         severity: 'success'
//     });
//     const StyledBadge = styled(Badge)(({ theme }) => ({
//         "& .MuiBadge-dot": {
//             borderRadius: 4,
//             height: 8,
//             minWidth: 8,
//             border: "1px solid white",
//             color: "#00B1B0"
//         }
//     }));

//     // ------------------------------- Manage Delegate List Tab------------------------------------------------
//     const manageDelegateUserTab = async (isCancel: boolean) => {
//         const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const payload: string = {
//             ...manageDelegateTab,
//             email: EMAIL_REGEX.test(manageDelegateTab?.email || '') ?
//                 manageDelegateTab?.email :
//                 null
//         };
//         try {
//             const { success, message }: manageDelegatesInterFace =
//                 await upmGQL.manageDelegateHandler(payload);
//             if (success) {
//                 if (isCancel) setUSerProfileModal(false);
//             } else {
//                 setToastData((i) => ({
//                     ...i,
//                     toastOpen: true,
//                     messageApi: message,
//                     severity: 'error'
//                 }));
//             }
//         } catch (err) {
//             setToastData((i) => ({
//                 ...i,
//                 toastOpen: true,
//                 messageApi: 'Something went wrong',
//                 severity: 'error'
//             }));
//         }
//     };
//     return (
//         <AppBar sx={{ background: "#0069BF" }}>
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters >
//                     <Box sx={{ display: "flex", alignItems: "center" }}>
//                         <Typography
//                             sx={{
//                                 fontWeight: 500,
//                                 color: "white",
//                                 textDecoration: "none",
//                                 fontSize: "24px",
//                                 fontFamily: 'monospace'
//                             }}
//                         >
//                             go
//                         </Typography>
//                     </Box>
//                     <Box
//                         sx={{
//                             flexGrow: 1,
//                             display: "flex",
//                             // display: { xs: "none", md: "flex" },
//                             justifyContent: "end"

//                         }}
//                     >
//                         <Box sx={{
//                             display: "flex", justifyContent: "center", gap: "17px", alignItems: "center"
//                         }}>
//                             <Link
//                                 to=""
//                                 style={{
//                                     fontSize: "14px",
//                                     fontFamily: "Roboto Medium", fontWeight: 500, textDecoration: "none", color: "#FFFFFF"
//                                 }}>
//                                 Travel
//                             </Link>
//                             <Link
//                                 to=""
//                                 style={{
//                                     fontSize: "14px",
//                                     fontFamily: "Roboto Medium", fontWeight: 500, textDecoration: "none", color: "#FFFFFF"
//                                 }}>
//                                 Expense
//                             </Link>
//                             <Link
//                                 to=""
//                                 style={{
//                                     fontSize: "14px",
//                                     fontFamily: "Roboto Medium", fontWeight: 500, textDecoration: "none", color: "#FFFFFF"
//                                 }}>
//                                 Help
//                             </Link>
//                             <Typography sx={{
//                                 display: "flex", alignItems: "center",
//                                 gap: "8px"
//                             }}>
//                                 <Tooltip title="">
//                                     <IconButton sx={{ p: 0, borderRadius: "65px" }}>
//                                         <StyledBadge
//                                             color="success"
//                                             overlap="circular"
//                                             variant="dot"
//                                             anchorOrigin={{
//                                                 vertical: "bottom",
//                                                 horizontal: "right"
//                                             }}
//                                         >
//                                             <Avatar alt="user name" src="" sx={{ width: "35px", height: "35px", borderRadius: "65px" }} />
//                                         </StyledBadge>
//                                     </IconButton>
//                                 </Tooltip>
//                                 <IconButton
//                                     sx={{ p: 0, color: "white", cursor: "pointer" }}
//                                     onClick={handleOpenUserMenu}
//                                 >
//                                     {arrowDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//                                 </IconButton>
//                             </Typography>
//                         </Box>

//                     </Box>
//                     <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
//                         <Menu
//                             sx={{ mt: "34px" }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: "top",
//                                 horizontal: "right"
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: "top",
//                                 horizontal: "right"
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             <Box sx={{ height: "206px", width: "271px" }}>
//                                 <Box sx={{
//                                     display: "flex", gap: "9px", alignItems: "center",
//                                     width: "270px", height: "48px",
//                                     paddingLeft: "13px", mt: "-8px", pt: "20px"
//                                 }}>
//                                     <Avatar
//                                         sx={{ height: "48px", width: "48px", borderRadius: "65px" }}
//                                         alt="User Image"
//                                         src="" />
//                                     <Box sx={{
//                                         height: "36px", width: "195px", gap: "7px"
//                                     }}>
//                                         <Typography variant="body2" sx={{
//                                             fontFamily: 'Roboto Bold',
//                                             fontsize: "14px", fontWeight: 700
//                                         }}>
//                                             Alanna Fridfertig
//                                         </Typography>
//                                         <Typography variant="body2" sx={{
//                                             fontFamily: "Roboto Regular", fontSize: "11px", mt: "4px",
//                                             lineHeight: "12.89px", fontWeight: 400, height: "13px"
//                                         }}>
//                                             Associate director, business solutions
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                                 <Box sx={{ marginTop: "14px" }}>
//                                     <ButtonComponent
//                                         btnTitle={'Switch to Administration'}
//                                         sx={{
//                                             "ml": '13px',
//                                             "color": '#0069BF',
//                                             "fontWeight": 500,
//                                             "fontSize": '12px',
//                                             "fontFamily": 'Roboto Regular',
//                                             "width": '245px',
//                                             "height": '34px',
//                                             'border-radius': '5px',
//                                             "pointerEvents": 'cursor',
//                                             "marginLeft": '9px',
//                                             "backgroundColor": '#C8E9FF',
//                                             "textTransform": 'inherit',
//                                             "boxShadow": 'none',
//                                             "hover": 'none',
//                                             '&:hover': {
//                                                 backgroundColor: '#C8E9FF',
//                                                 boxShadow: 'none',
//                                             }
//                                         }} />
//                                 </Box>
//                                 <Divider sx={{ marginTop: "14px", color: "#EAEBEC" }} />
//                                 <Box >
//                                     <Typography
//                                         sx={{
//                                             marginTop: "14px", cursor: "pointer", height: "14px", width: "251px",
//                                             fontSize: "12px", fontFamily: "Roboto Regular", fontweight: 400,
//                                             marginLeft: "13px", color: "Black"
//                                         }}
//                                         variant="body2"
//                                         onClick={() => setUSerProfileModal(true)}
//                                     >
//                                         My Profile
//                                     </Typography>
//                                     <Typography
//                                         sx={{
//                                             marginTop: "14px", cursor: "pointer", height: "14px", width: "251px",
//                                             fontSize: "12px", fontFamily: "Roboto Regular", fontweight: 400,
//                                             marginLeft: "13px", color: "Black"
//                                         }}
//                                         variant="body2"
//                                     >
//                                         Users
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         </Menu>
//                         <ModalComponent
//                             open={userProfileModal}
//                             handleClose={() => setUSerProfileModal(!userProfileModal)}
//                             modalCardContainerStyle={{ width: '900px', height: '638px' }}
//                             contentSx={{
//                                 height: '100%',
//                                 minWidth: '500px',
//                                 padding: '0px'
//                             }}
//                         >
//                             <UPMModal
//                                 setUSerProfileModal={setUSerProfileModal}
//                                 manageDelegateUserTab={manageDelegateUserTab}
//                             />
//                             <Questions />
//                         </ModalComponent>
//                         {toastData.toastOpen && (
//                             <Toast
//                                 open={toastData.toastOpen}
//                                 onClose={() => setToastData((i) => ({ ...i, toastOpen: false }))}
//                                 toastSeverity={toastData.severity}
//                                 autoHideDuration={4000}
//                                 message={toastData.messageApi}
//                             />
//                         )}
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// };
// export default Index;




/*-----------------------------------------old header with changes ------------------------------------------------------------------------*/


import React, { useState } from 'react';
import { Avatar, Badge, Box, Divider, Grid, IconButton, Menu, Tooltip, Typography } from '@mui/material';
import ModalComponent from '../../Core/ModalComponent';
import UPMModal from '../UPM';
import { useSelector } from 'react-redux';
import { upmGQL } from '../../../graphqlOperations';
import { manageDelegatesInterFace } from '../../../types/expense/userProfileTypes';
import { toast } from '../../../types/ccm/common';
import Toast from '../../Core/Toast';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ButtonComponent from '../../Core/ButtonComponent';
import styled from '@emotion/styled';

const Index: React.FC = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [arrowDown, setArrowDown] = useState(true);
    const { manageDelegateTab } = useSelector((state: any) => state.upm);
    const [userProfileModal, setUSerProfileModal] = useState<boolean>(false);

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
        setArrowDown(!arrowDown);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setArrowDown(true);
    };
    const [toastData, setToastData] = useState<toast>({
        toastOpen: false,
        messageApi: '',
        severity: 'success'
    });
    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-dot": {
            borderRadius: 4,
            height: 8,
            minWidth: 8,
            border: "1px solid white",
            color: "#00B1B0"
        }
    }));
    // ------------------------------- Manage Delegate List Tab------------------------------------------------
    const manageDelegateUserTab = async (isCancel: boolean) => {
        const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const payload: string = {
            ...manageDelegateTab,
            email: EMAIL_REGEX.test(manageDelegateTab?.email || '') ?
                manageDelegateTab?.email :
                null
        };
        try {
            const { success, message }: manageDelegatesInterFace =
        await upmGQL.manageDelegateHandler(payload);
            if (success) {
                if (isCancel) setUSerProfileModal(false);
            } else {
                setToastData((i) => ({
                    ...i,
                    toastOpen: true,
                    messageApi: message,
                    severity: 'error'
                }));
            }
        } catch (err) {
            setToastData((i) => ({
                ...i,
                toastOpen: true,
                messageApi: 'Something went wrong',
                severity: 'error'
            }));
        }
    };
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 200, sm: 150, md: 70, lg: 70, xl: 70 },
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Grid container spacing={3} sx={{ margin: 0, p: 0, width: '100%' }}>
                <Grid xs={12} sm={12} md={3} lg={2} xl={1.5} sx={{ margin: 0, p: 0 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '17px'
                        }}
                    >
                        <div style={{ marginLeft: '25px' }}>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontFamily: 'Roboto Bold',
                                    color: '#fff'
                                }}
                            >
                Go
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Box sx={{ padding: '0px 10px 0px 10px' }}>
                         <Box
                         sx={{
                             flexGrow: 1,
                             display: "flex",
                            //  display: { xs: "none", md: "flex" },
                             justifyContent: "end"

                         }}
                     >
                         <Box sx={{
                             display: "flex", justifyContent: "center", gap: "17px", alignItems: "center"
                         }}>
                             <Link
                                 to=""
                                 style={{
                                     fontSize: "14px",
                                     fontFamily: "Roboto Medium", fontWeight: 500, textDecoration: "none", color: "#FFFFFF"
                                 }}>
                                 Travel
                             </Link>
                             <Link
                                 to=""
                                 style={{
                                     fontSize: "14px",
                                     fontFamily: "Roboto Medium", fontWeight: 500, textDecoration: "none", color: "#FFFFFF"
                                 }}>
                                 Expense
                             </Link>
                             <Link
                                 to=""
                                 style={{
                                     fontSize: "14px",
                                     fontFamily: "Roboto Medium", fontWeight: 500, textDecoration: "none", color: "#FFFFFF"
                                 }}>
                                 Help
                             </Link>
                             <Typography sx={{
                                 display: "flex", alignItems: "center",
                                 gap: "8px"
                             }}>
                                 <Tooltip title="">
                                     <IconButton sx={{ p: 0, borderRadius: "65px" }}>
                                         <StyledBadge
                                             color="success"
                                             overlap="circular"
                                             variant="dot"
                                             anchorOrigin={{
                                                 vertical: "bottom",
                                                 horizontal: "right"
                                             }}
                                         >
                                             <Avatar alt="user name" src="" sx={{ width: "35px", height: "35px", borderRadius: "65px" }} />
                                         </StyledBadge>
                                     </IconButton>
                                 </Tooltip>
                                 <IconButton
                                     sx={{ p: 0, color: "white", cursor: "pointer" }}
                                     onClick={handleOpenUserMenu}
                                 >
                                     {arrowDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                 </IconButton>
                             </Typography>
                         </Box>

                     </Box>
                     <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                         <Menu
                             sx={{ mt: "34px" }}
                             id="menu-appbar"
                             anchorEl={anchorElUser}
                             anchorOrigin={{
                                 vertical: "top",
                                 horizontal: "right"
                             }}
                             keepMounted
                             transformOrigin={{
                                 vertical: "top",
                                 horizontal: "right"
                             }}
                             open={Boolean(anchorElUser)}
                             onClose={handleCloseUserMenu}
                         >
                             <Box sx={{ height: "206px", width: "271px" }}>
                                 <Box sx={{
                                     display: "flex", gap: "9px", alignItems: "center",
                                     width: "270px", height: "48px",
                                     paddingLeft: "13px", mt: "-8px", pt: "20px"
                                 }}>
                                     <Avatar
                                         sx={{ height: "48px", width: "48px", borderRadius: "65px" }}
                                         alt="User Image"
                                         src="" />
                                     <Box sx={{
                                         height: "36px", width: "195px", gap: "7px"
                                     }}>
                                         <Typography variant="body2" sx={{
                                             fontFamily: 'Roboto Bold',
                                             fontsize: "14px", fontWeight: 700
                                         }}>
                                             Alanna Fridfertig
                                         </Typography>
                                         <Typography variant="body2" sx={{
                                             fontFamily: "Roboto Regular", fontSize: "11px", mt: "4px",
                                             lineHeight: "12.89px", fontWeight: 400, height: "13px"
                                         }}>
                                             Associate director, business solutions
                                         </Typography>
                                     </Box>
                                 </Box>
                                 <Box sx={{ marginTop: "14px" }}>
                                     <ButtonComponent
                                         btnTitle={'Switch to Administration'}
                                         sx={{
                                             "ml": '13px',
                                             "color": '#0069BF',
                                             "fontWeight": 500,
                                             "fontSize": '12px',
                                             "fontFamily": 'Roboto Regular',
                                             "width": '245px',
                                             "height": '34px',
                                             'border-radius': '5px',
                                             "pointerEvents": 'cursor',
                                             "marginLeft": '9px',
                                             "backgroundColor": '#C8E9FF',
                                             "textTransform": 'inherit',
                                             "boxShadow": 'none',
                                             "hover": 'none',
                                             '&:hover': {
                                                 backgroundColor: '#C8E9FF',
                                                 boxShadow: 'none',
                                             }
                                         }} />
                                 </Box>
                                 <Divider sx={{ marginTop: "14px", color: "#EAEBEC" }} />
                                 <Box >
                                     <Typography
                                         sx={{
                                             marginTop: "14px", cursor: "pointer", height: "14px", width: "251px",
                                             fontSize: "12px", fontFamily: "Roboto Regular", fontweight: 400,
                                             marginLeft: "13px", color: "Black"
                                         }}
                                         variant="body2"
                                         onClick={() => setUSerProfileModal(true)}
                                     >
                                         My Profile
                                     </Typography>
                                     <Typography
                                         sx={{
                                             marginTop: "14px", cursor: "pointer", height: "14px", width: "251px",
                                             fontSize: "12px", fontFamily: "Roboto Regular", fontweight: 400,
                                             marginLeft: "13px", color: "Black"
                                         }}
                                         variant="body2"
                                     >
                                         Users
                                     </Typography>
                                 </Box>
                             </Box>
                         </Menu>
                         <ModalComponent
                             open={userProfileModal}
                             handleClose={() => setUSerProfileModal(!userProfileModal)}
                             modalCardContainerStyle={{ width: '900px', height: '638px' }}
                             contentSx={{
                                 height: '100%',
                                 minWidth: '500px',
                                 padding: '0px'
                             }}
                         >
                             <UPMModal
                                 setUSerProfileModal={setUSerProfileModal}
                                 manageDelegateUserTab={manageDelegateUserTab}
                             />
                             {/* <Questions /> */}
                         </ModalComponent>
                         {toastData.toastOpen && (
                             <Toast
                                 open={toastData.toastOpen}
                                 onClose={() => setToastData((i) => ({ ...i, toastOpen: false }))}
                                 toastSeverity={toastData.severity}
                                 autoHideDuration={4000}
                                 message={toastData.messageApi}
                             />
                         )}
                     </Box>
            </Box>
            <ModalComponent
                open={userProfileModal}
                handleClose={() => setUSerProfileModal(!userProfileModal)}
                modalCardContainerStyle={{ width: '900px', height: '638px' }}
                contentSx={{
                    height: '100%',
                    minWidth: '500px',
                    padding: '0px'
                }}
            >
                <UPMModal
                    setUSerProfileModal={setUSerProfileModal}
                    manageDelegateUserTab={manageDelegateUserTab}
                />
            </ModalComponent>
            {toastData.toastOpen && (
                <Toast
                    open={toastData.toastOpen}
                    onClose={() => setToastData((i) => ({ ...i, toastOpen: false }))}
                    toastSeverity={toastData.severity}
                    autoHideDuration={4000}
                    message={toastData.messageApi}
                />
            )}
        </Box>
    );
};
export default Index;