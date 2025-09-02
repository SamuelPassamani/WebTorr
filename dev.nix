{
  # See https://developers.google.com/idx/guides/customize-idx-env
  pkgs,
  ...
}: {
  # Enable Docker daemon
  features.docker = true;
  # Add your desired packages
  packages = [
    pkgs.git,
    pkgs.docker
  ];
}
