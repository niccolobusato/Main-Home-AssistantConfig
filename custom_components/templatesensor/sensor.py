"""Sensor platform for templatesensor."""
from homeassistant.helpers.entity import Entity
from homeassistant.helpers import template as templater


async def async_setup_entry(hass, config_entry, async_add_devices):
    """Setup sensor platform."""
    async_add_devices([CustomTemplateSensor(hass, config_entry)], True)


class CustomTemplateSensor(Entity):
    """CustomTemplateSensor class."""

    def __init__(self, hass, config):
        self.hass = hass
        self.config = config
        self._state = None

    async def async_update(self):
        """Update the sensor."""
        try:
            self._state = templater.Template(
                self.config.options.get("template"), self.hass
            ).async_render()
        except Exception as exception:
            self._state = self._state

    @property
    def unique_id(self):
        """Return a unique ID to use for this sensor."""
        return self.config.entry_id

    @property
    def name(self):
        """Return the name of the sensor."""
        return self.config.data.get("name")

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    @property
    def unit_of_measurement(self):
        """Return the unit_of_measurement of the sensor."""
        return self.config.options.get("unit")

    @property
    def icon(self):
        """Return the icon of the sensor."""
        return self.config.options.get("icon")
