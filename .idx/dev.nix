# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05";

  # 1. Install packages permanently. Each package must be on its own line
  # or separated by a space.
  packages = [
    pkgs.docker
    pkgs.docker-compose
  ];

  # 2. Enable and run the Docker service (daemon) in the background.
  features = {
    docker.enable = true;
  };

  # 3. IDX-specific settings (can be left as is).
  idx = {};
}
