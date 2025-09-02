# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages.
  # We add git, docker, and docker-compose as needed for the project.
  packages = [
    pkgs.git
    pkgs.docker
    pkgs.docker-compose
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [];

    # Enable previews and configure one for the web application
    previews = {
      enable = true;
      previews = {
        # This preview will run the Docker container after it's built
        # and expose it on a URL for you to test.
        web = {
          # The command to run. We use the tag "webtor-test-build" that we used before.
          # It maps the internal port 8080 to the preview port provided by IDX.
          command = ["docker" "run" "--rm" "-p" "$PORT:8080" "webtor-test-build"];
          manager = "web";
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {};
      # Runs when the workspace is (re)started
      onStart = {};
    };

    # Enable the Docker feature to run the Docker daemon automatically.
    # This is the key fix for the "Cannot connect to the Docker daemon" error.
    features = {
        docker.enable = true;
    };
  };
}
