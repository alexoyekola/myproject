After('@slow_motion') do
    sleep 2
  end

After('@single_step') do
    print "Single Stepping. Hit enter to continue"
    STDIN.getc
  end