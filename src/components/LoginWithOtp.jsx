import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from "@mui/material";


export default function LoginWithOtp() {
  return (
    <main>
      <div className="row gap-2">
        <div className="col">
          <div className="d-flex align-items-center justify-content-center justify-content-md-center flex-wrap gap-3">
            <Grid item><Link className=" text-decoration-none" component={RouterLink} to="/loginwithotp"><button type="button" className="btn btn-outline-success">Login with OTP</button></Link></Grid>
            <Grid item><Link className="text-decoration-none" component={RouterLink} to="/loginpage"><button type="button" className="btn btn-outline-success">Login with password</button> </Link></Grid>
          </div>
        </div>
      </div>
      <Sheet
        sx={{
          width: 400,
          height: 350,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 6, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1" sx={{ fontFamily: 'Candara' }}>
            <b>Login with OTP</b>
          </Typography>
        </div>
        <FormControl>
          <Input
            // html input attribute
            name="email"
            type="email"
            //   value="+91"
            placeholder="Enter Your Mobile "
          />
        </FormControl>

        <Button sx={{ mt: 1 /* margin top */ }}>Get OTP</Button>
        <Typography
          endDecorator={<Link href="/sign-up">Register</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>

        <Typography
          endDecorator={<Link href="">Gharaya's Privacy Policy</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          By continuing, you agree to
        </Typography>
      </Sheet>
    </main>
  );
}
