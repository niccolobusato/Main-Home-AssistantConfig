"""Constants for templatesensor."""
# Base component constants
DOMAIN = "templatesensor"
DOMAIN_DATA = f"{DOMAIN}_data"
VERSION = "0.1.0"
PLATFORMS = ["sensor"]
REQUIRED_FILES = [
    ".translations/en.json",
    "const.py",
    "config_flow.py",
    "manifest.json",
    "sensor.py",
]
ISSUE_URL = "https://github.com/custom-components/templatesensor/issues"
