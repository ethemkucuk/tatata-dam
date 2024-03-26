import "./App.css"


function App() {
	return (
		<div className="App">
			<div className="all">
				<main>
					<h1 class="main__sr-only">
						iWeather, Your Weather Companion
					</h1>

					<section class="main__intro">
						<img
							src="./images/icons/header.svg"
							class="intro__heading"
							alt=""
							width="171"
							height="24"
						/>

						<div class="intro__description">
							<h2 class="description__welcome">
								Welcome To <span>iWeather</span>
							</h2>
							<p class="description__hint">
								Choose a location to view the weather forecast
							</p>
						</div>

						<form
							action=""
							novalidate
							autocomplete="off"
							class="intro__form"
						>
							<label
								for="primary-searchbar"
								class="form__sr-only"
							>
								Search Location
							</label>
							<input
								type="text"
								id="primary-searchbar"
								name="primary-searchbar"
								placeholder="Search Location"
							/>
							<ul
								role="list"
								class="form__suggestions-list form__suggestions--intro"
							></ul>

							<button
								class="form__submit-btn"
								aria-label="Submit Button"
							></button>
						</form>
					</section>

					<section class="main__dashboard">
						<div class="main__dashboard-wrapper">
							<div class="dashboard__header-container">
								<div class="dashboard__header-wrapper">
									<button
										class="header-wrapper__header"
										aria-label="iWeather - Home"
									>
										<img
											src="./images/icons/Logo.svg"
											alt=""
											class="header__logo"
											width="24"
											height="16"
										/>
									</button>
									<form
										action=""
										novalidate
										autocomplete="off"
									>
										<label
											for="secondary-searchbar"
											class="form__sr-only"
										>
											Search Location
										</label>
										<input
											type="text"
											id="secondary-searchbar"
											name="secondary-searchbar"
											placeholder="Search Location"
										/>
										<ul
											role="list"
											class="form__suggestions-list"
										></ul>
										<button
											class="form__submit-btn"
											aria-label="Submit Button"
										></button>
									</form>
								</div>
								<div class="header-container__statistics">
									<div class="statistics__meta-wrapper">
										<div class="meta-wrapper__location">
											<address>
												<p>TBD</p>
											</address>
											<time datetime="2023-05-15">
												TBD
											</time>
										</div>
										<div class="meta-wrapper__time">
											<time>TBD</time>
										</div>
									</div>
									<div class="statistics__stat-data">
										<p class="stat-data__values">
											<span class="values__current">
												<span class="current__sr-only">
													{" "}
													Current Temperature{" "}
												</span>
												<span class="current__temp">
													TBD
												</span>
											</span>
											<span class="values__range">
												<span class="range__sr-only">
													{" "}
													Temperature Range{" "}
												</span>
												<span class="range__min-to-max">
													TBD
												</span>
											</span>
											<span class="values__weather-condition">
												<span class="weather-condition__sr-only">
													Weather Condition
												</span>
												<span class="weather-condition__string">
													TBD
												</span>
											</span>
										</p>
										<img
											src="./images/icons/Weather=Clear, Moment=Day.svg"
											class="stat-data__illustration"
											alt=""
											width="220"
											height="220"
										/>
									</div>
								</div>
							</div>
							<div class="dashboard__overview-section">
								<p class="overview-section__heading">
									Today's weather details
								</p>
								<ul class="overview-section__list">
									<li>
										<span class="list__content">
											<img
												src="./images/icons/Type=thermometer-simple-light.svg"
												alt=""
												width="32"
												height="32"
											/>
											Thermal Sensation
										</span>
										<span class="list__value">TBD</span>
									</li>
									<li>
										<span class="list__content">
											<img
												src="./images/icons/Type=cloud-rain-light.svg"
												alt=""
												width="32"
												height="32"
											/>
											Rain Probability
										</span>
										<span class="list__value">TBD</span>
									</li>
									<li>
										<span class="list__content">
											<img
												src="./images/icons/Type=wind-light.svg"
												alt=""
												width="32"
												height="32"
											/>
											Wind Speed
										</span>
										<span class="list__value">TBD</span>
									</li>
									<li>
										<span class="list__content">
											<img
												src="./images/icons/Type=drop-light.svg"
												alt=""
												width="32"
												height="32"
											/>
											Air Humidity
										</span>
										<span class="list__value">TBD</span>
									</li>
									<li>
										<span class="list__content">
											<img
												src="./images/icons/Type=sun-dim-light.svg"
												alt=""
												width="32"
												height="32"
											/>
											UV Index
										</span>
										<span class="list__value">TBD</span>
									</li>
								</ul>
							</div>
							<div class="dashboard__predictions">
								<p class="predictions__heading">
									Forecast for 5 days
								</p>
								<ul class="predictions__list"></ul>
							</div>
							<div class="dashboard__filler"></div>
						</div>
					</section>

					<section class="main__error-prompter" aria-live="polite">
						<div class="error-prompter__subdiv">
							<img
								src="./images/backgrounds/error.svg"
								alt=""
								width="750"
								height="500"
							/>
							<h2 class="error-prompter__heading">
								Location not found
							</h2>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}

export default App
