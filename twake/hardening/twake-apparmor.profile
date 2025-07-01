# AppArmor profile for Twake container
profile twake-profile flags=(attach_disconnected) {
  # Basic container restrictions
  # Add granular file/network permissions as needed
  network,
  capability,
  file,
  umount,
  mount,
}