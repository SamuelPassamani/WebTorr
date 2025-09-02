# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05";

  # 1. Install the Docker command-line tool permanently.
  packages = [
    pkgs.docker
    pkgs.docker-compose # Included as per your repository's README
  ];

  # 2. Enable and run the Docker service (daemon) in the background.
  # This is the most critical part to fix the "Cannot connect" error.
  features = {
    docker.enable = true;
  };

  idx = {
    # This section is for IDX-specific settings like extensions and previews.
    # Keeping it empty is fine if we don't need to customize those.
  };
}
