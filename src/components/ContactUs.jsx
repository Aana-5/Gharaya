import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, IconButton, Link, Grid } from '@mui/material';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const ContactUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const animatedLinkStyle = {
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        display: "inline-block",
        color: "#000",
        textDecoration: "none",
        transition: "color 0.3s ease",
        "&::after": {
            content: '""',
            position: "absolute",
            width: "0%",
            height: "0.125rem",
            left: 0,
            bottom: 0,
            backgroundColor: "#ffeb3b",
            transition: "width 0.3s ease"
        },
        "&:hover": {
            color: "#0b7c3c",
            "&::after": {
                width: "100%"
            }
        }
    };

    const socialIconStyles = {
        color: "#0b7c3c",
        fontSize: 28,
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.2)",
            color: "#fff"
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
            }}
        >
            {/* Left Box */}
            <Box
                sx={{
                    width: isMobile ? '100vw' : '50vw',
                    minHeight: isMobile ? '50vh' : '100vh',
                    backgroundColor: 'lightgrey',
                    borderRadius: isMobile ? '1.875rem 1.875rem 0 0' : '1.875rem 0 0 1.875rem',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}
            >
                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 100,
                        color: '#000',
                    }}
                >
                    Contact Us
                </Typography>

                {/* Gradient underline */}
                <Box
                    sx={{
                        background: 'transparent linear-gradient(90deg, #f9e03a 0%, #27a84a 100%) 0% 0% no-repeat padding-box',
                        borderRadius: '0.25rem',
                        opacity: 1,
                        height: '0.5rem',
                        width: '7rem',
                        margin: '0.938rem 0 1.5rem',
                        display: 'block',
                    }}
                />

                {/* Icon + "Address" Title */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        marginBottom: '1rem',
                    }}
                >
                    <IconButton
                        href="#"
                        aria-label="Location"
                        size="large"
                        sx={socialIconStyles}
                    >
                        <LocationPinIcon fontSize='inherit' />
                    </IconButton>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '1.5rem',
                            color: '#262726',
                            fontWeight: 100,
                        }}
                    >
                        Address
                    </Typography>
                </Box>

                {/* Company Info Box */}
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '1.5rem',
                        borderRadius: '0.75rem',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#000',
                        lineHeight: 1.8,
                        maxWidth: '90%',
                    }}
                >
                    <Typography variant="body1">
                        <strong>Desimati Agri Technologies And Services Private Limited</strong><br /><br />
                        <strong>Corporate Address</strong><br />
                        Plot No. 380, JDA Scheme 14, Vijay Nagar Road, Jabalpur, Madhya Pradesh - 482002
                    </Typography>

                    <Box mt={2}>
                        <Typography variant="body1"><strong>Mobile</strong></Typography>
                        <Typography variant="body2">
                        <Grid item><Link href="tel:+916261497479" underline="hover" color="#fff" sx={animatedLinkStyle}><b>+91 - 6261497479</b></Link></Grid>
                        </Typography>
                    </Box>

                    <Box mt={2}>
                        <Typography variant="body1"><strong>Email</strong></Typography>
                        <Typography variant="body2">
                            <Grid item><Link href="mailto:admin@desimati.com" underline="hover" color="#fff" sx={animatedLinkStyle}><b>admin@desimati.com</b></Link><br /></Grid>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Right Box */}
            <Box
                sx={{
                    width: isMobile ? '100vw' : '50vw',
                    minHeight: isMobile ? '50vh' : '100vh',
                    backgroundColor: '#0b7c3c',
                    borderRadius: isMobile ? '0 0 1.875rem 1.875rem' : '0 1.875rem 1.875rem 0',
                }}
            >
                {/* You can add a form or map here if needed later */}
            </Box>
        </Box>
    );
};

export default ContactUs;
