/* Detailed swipe cards: derivation hints, assumptions, and design practice. */
cheat.push(
['Limits & continuity','A limit describes the value approached as x tends to a point. A derivative exists only when the function is continuous and left/right slopes agree.','lim(x→a)f(x)=L · f′(a)=lim(h→0)[f(a+h)−f(a)]/h'],
['Chain, product & quotient rules','Use chain rule for nested functions, product rule for multiplication, quotient rule for ratios.','(f∘g)′=f′(g)g′ · (uv)′=u′v+uv′<br>(u/v)′=(u′v−uv′)/v²'],
['Multivariable calculus','Partial derivatives hold other variables constant. Gradient points toward steepest increase.','∇f=∂f/∂xi+∂f/∂yj+∂f/∂zk<br>df=(∂f/∂x)dx+(∂f/∂y)dy'],
['Differential equations','Separable ODEs split variables; first-order linear systems use an integrating factor.','dy/dx=ky → y=Ceᵏˣ<br>y′+P(x)y=Q(x), μ=e^(∫Pdx)'],
['Fourier series','Periodic signals can be expressed as harmonics. Useful for filtering, spectra, and distortion.','f(t)=a₀/2+Σ[aₙcos(nω₀t)+bₙsin(nω₀t)]'],
['Projectile motion','Resolve initial velocity into x/y components. Neglect drag only for a first estimate.','x=v₀cosθ·t · y=v₀sinθ·t−½gt²<br>Range=v₀²sin(2θ)/g'],
['Gravitation','Newtonian gravity applies well outside relativistic regimes. Potential energy is relative to infinity.','F=Gm₁m₂/r² · Ug=−Gm₁m₂/r<br>G=6.67430×10⁻¹¹ N·m²/kg²'],
['Oscillations','Simple harmonic motion repeats around equilibrium; damping reduces amplitude.','x=Acos(ωt+φ) · ω=√(k/m)<br>T=2π√(m/k)'],
['Rigid-body rotation','Use moment of inertia about the selected axis. Torque and angular acceleration share direction.','ω=ω₀+αt · θ=θ₀+ω₀t+½αt²<br>Ek,rot=½Iω²'],
['Bernoulli & viscosity','Bernoulli assumes steady incompressible non-viscous flow along a streamline. Real pipe loss needs friction terms.','P+½ρv²+ρgh=constant<br>Re=ρvD/μ'],
['Heat transfer','Conduction scales with material conductivity; convection uses empirical h; radiation rises with T⁴.','q̇cond=kAΔT/L · q̇conv=hAΔT<br>q̇rad=εσA(T⁴−Ts⁴)'],
['Relativity & modern physics','Use only when speeds approach c or quantum scales matter.','γ=1/√(1−v²/c²) · E=mc²<br>Ephoton=hf=hc/λ']
);
ee.splice(0,ee.length,
['DC analysis','Start with polarity labels and a ground reference. Apply KCL at unknown nodes; use KVL for loop currents.','V=IR · P=VI<br>Design note: check resistor power with margin; use ≥2× expected dissipation.'],
['Thevenin / Norton','Replace a linear two-terminal network to simplify load analysis. Find open-circuit voltage and equivalent resistance.','Vth=Voc · In=Isc · Rth=Vth/In<br>Use: quickly test different loads without solving the full circuit each time.'],
['Capacitors & inductors','Capacitor voltage and inductor current cannot change instantly in ideal models. Initial conditions matter.','iC=C dv/dt · vL=L di/dt<br>UC=½CV² · UL=½LI²'],
['Transient response','A first-order network settles close to final value after about five time constants.','τRC=RC · τRL=L/R<br>At t=5τ, response ≈99.3% settled.'],
['AC & phasors','Convert sinusoids at one frequency into complex phasors; then use impedance algebra.','ZR=R · ZL=jωL · ZC=1/(jωC)<br>Use RMS values for power calculations.'],
['RLC resonance','At resonance, inductive and capacitive reactance cancel. Q predicts selectivity and bandwidth.','f0=1/(2π√LC) · BW=f0/Q<br>High Q improves selectivity but can increase ringing.'],
['Diodes & rectifiers','A real diode has voltage drop and power dissipation. Size reverse-voltage and surge-current ratings.','ID=IS(e^(VD/nVT)−1)<br>Bridge ripple estimate: ΔV≈Iload/(fRipple C)'],
['BJT & MOSFET switches','BJTs need base current; MOSFETs need gate charge, not steady gate current. Logic-level refers to low RDS(on) at stated VGS.','BJT: IC≈βIB · MOSFET loss≈I²RDS(on)<br>Use a flyback diode on inductive loads.'],
['Op-amps','Assume virtual short only while negative feedback and output headroom hold. Check input common-mode and slew rate.','Inverting: Av=−Rf/Rin<br>Non-inverting: Av=1+Rf/Rg'],
['Filters','A first-order filter rolls off at 20 dB/decade. Cascaded stages sharpen slope.','fc=1/(2πRC) · |HLP|=1/√(1+(f/fc)²)<br>Choose C0G/film for stable precision filters.'],
['ADC / DAC','ADC resolution sets LSB size; sampling rate sets usable bandwidth. Anti-alias filtering is physical, not optional.','LSB=Vref/(2ᴺ−1) · SNRideal≈6.02N+1.76 dB<br>fs>2fmax'],
['Digital interfaces','I²C uses pull-ups; SPI is push-pull; UART needs matched baud and common ground.','I²C pull-up rise time ≈0.847RC<br>Logic thresholds depend on the data sheet.'],
['Transmission lines','Treat traces as transmission lines when flight time is comparable to edge rise time. Terminate at source/load as appropriate.','λ=c/(f√εr) · Z0≈√(L′/C′)<br>Fast edges—not clock rate—trigger problems.'],
['Power conversion','A buck lowers voltage; a boost raises it. Layout parasitics determine noise and stability.','Ideal buck: Vout≈DVin<br>Efficiency η=Pout/Pin'],
['PCB / EMC','Minimize loop area, keep high-di/dt paths short, and provide continuous return paths.','Xc=1/(2πfC)<br>Place 100 nF decouplers at each IC power pin.'],
['Measurement & safety','Probe ground clips can short circuits. Verify meter range and CAT rating before measuring.','Verror=Vtrue×(Rin/(Rsource+Rin))<br>Never work energized on mains without qualified supervision.']
);
