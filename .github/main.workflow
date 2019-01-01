workflow "Build and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Skip CI Filter" {
 secrets = ["GH_TOKEN"]
 uses = "hipstersmoothie/only-merge-action@master"
}

action "Install" {
  needs = "Skip CI Filter"
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "run build"
}

action "Test" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run test"
}

action "Lint" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run lint"
}

action "Master Filter" {
  needs = ["Test", "Lint"],
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish" {
  needs = "Master Filter"
  secrets = ["GH_TOKEN", "NPM_TOKEN"]
  uses = "hipstersmoothie/auto-release-actions@master"
  args = "shipit"
}
