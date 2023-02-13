import BackupIcon from "@mui/icons-material/Backup";
import { Box, Button, FormControl, Grid, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadLandingPage = () => {
  const [showPreview, setShowPreview] = useState<string>("");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const base64 = await toBase64(acceptedFiles[0]);
    setShowPreview(base64);
  }, []);

  const toBase64 = (file: Blob): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleStorage = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        columnGap={10}
        sx={{ width: "100%" }}
      >
        <Grid
          container
          item
          {...getRootProps()}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            border: "3px dashed #ab47bc",
            width: "50%",
            marginTop: "5%",
          }}
        >
          <Grid item width={"25%"}>
            <input {...getInputProps()} />
            <BackupIcon
              sx={{
                fontSize: 50,
                marginLeft: "25%",
              }}
            />
          </Grid>
          <Grid item width={"25%"}>
            <Typography variant="h6" gutterBottom>
              Drop the files here ...
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          sx={{
            border: "3px dashed #ab47bc",
            width: "50%",
            marginTop: "5%",
          }}
        >
          {showPreview.length > 0 && (
            <Grid item width={"50%"}>
              <Box
                component="img"
                sx={{
                  height: "auto",
                  width: "auto",
                  maxHeight: { xs: 500, md: 250 },
                  maxWidth: { xs: 500, md: 250 },
                }}
                alt="Preview image."
                src={showPreview}
              />
            </Grid>
          )}
          <Grid item width={"100%"}>
            <FormControl variant="standard" fullWidth>
              <Button onClick={handleStorage} variant="contained">
                Storage Image
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UploadLandingPage;
