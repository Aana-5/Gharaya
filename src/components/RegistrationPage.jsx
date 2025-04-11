import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ContactUs = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
            }}
        >
            {/* Left Box */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '50%' },
                    minHeight: '100vh',
                    backgroundColor: 'lightgrey',
                    borderRadius: { xs: '1.875rem 1.875rem 0 0', sm: '1.875rem 0 0 1.875rem' },
                    p: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    backgroundImage: 'url(../src/assets/images/loginimage2.jpg)',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '700px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                    }}
                >
                    {/* Top White Card */}
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            padding: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                            borderRadius: '0.75rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            fontFamily: 'Montserrat, sans-serif',
                            color: '#000',
                            lineHeight: 1.8,
                            width: '100%',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontSize: { xs: '1.4rem', sm: '2.8rem' }, fontFamily: 'Candara', fontWeight: 10 }}>
                            <strong>Sign in to DesiMati</strong>
                        </Typography>

                        <Typography sx={{ fontSize: { xs: '1rem', sm: '2rem' }, fontFamily: 'Candara', mt: '2rem', fontWeight: 10 }}>
                            <strong>Selected City</strong>
                        </Typography>
                        <Box sx={{ px: 1 }}>
                            <input
                                type="text"
                                style={{
                                    background: '#ffcf',
                                    borderRadius: '29px',
                                    border: '1px solid #39B55A',
                                    color: '#000',
                                    width: '100%',
                                    padding: '.375rem .75rem',
                                    fontSize: '1rem',
                                    marginTop: '0.5rem',
                                    boxSizing: 'border-box',
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: '1rem',
                                mt: '2rem',
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, fontFamily: 'Candara', fontWeight: 10 }}>
                                    <strong>First Name:</strong>
                                </Typography>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    style={{
                                        background: '#ffcf',
                                        borderRadius: '29px',
                                        border: '1px solid #39B55A',
                                        color: '#000',
                                        width: '100%',
                                        padding: '.375rem .75rem',
                                        fontSize: '1rem',
                                        marginTop: '0.5rem',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, fontFamily: 'Candara', fontWeight: 10 }}>
                                    <strong>Last Name:</strong>
                                </Typography>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    style={{
                                        background: '#ffcf',
                                        borderRadius: '29px',
                                        border: '1px solid #39B55A',
                                        color: '#000',
                                        width: '100%',
                                        padding: '.375rem .75rem',
                                        fontSize: '1rem',
                                        marginTop: '0.5rem',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>

                    {/* Bottom White Card */}
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            padding: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                            borderRadius: '0.75rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            fontFamily: 'Montserrat, sans-serif',
                            color: '#000',
                            lineHeight: 1.8,
                            width: '100%',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.5rem' },
                                    fontFamily: 'Candara',
                                    fontWeight: 10,
                                    mb: '0.5rem',
                                }}
                            >
                                <strong>Mobile</strong>
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Enter your mobile number"
                                    style={{
                                        background: '#ffcf',
                                        borderRadius: '29px',
                                        border: '1px solid #39B55A',
                                        color: '#000',
                                        width: '70%',
                                        padding: '.375rem .75rem',
                                        fontSize: '1rem',
                                        boxSizing: 'border-box',
                                    }}
                                    className="custom-input"
                                />

                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    Send OTP
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>


            {/* Right Box */}
            <Box
                sx={{
                    width: { xs: '0%', sm: '50%' },
                    height: { xs: 0, sm: 'auto' },
                    minHeight: { sm: '100vh' },
                    backgroundColor: '#27A84A',
                    borderRadius: { sm: '0 1.875rem 1.875rem 0' },
                    boxSizing: 'border-box',
                    display: { xs: 'none', sm: 'flex' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundImage: 'url(../src/assets/images/loginimage1.png)',
                    p: 4,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { sm: '4rem', md: '5rem' },
                            color: '#fff',
                            fontFamily: 'Candara',
                        }}
                    >
                        Hello,
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { sm: '0.8rem', md: '2rem' },
                            color: '#fff',
                            fontFamily: 'Candara',
                        }}
                    >
                        Enter your Details and start your journey with us
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;
