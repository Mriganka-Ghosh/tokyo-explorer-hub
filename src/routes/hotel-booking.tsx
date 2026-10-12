import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, BedDouble, MapPin } from "lucide-react";
import { TokyoLayout } from "@/components/tokyo-layout";
import { Button } from "@/components/ui/button";
import { heritageSites } from "@/lib/heritage";
import { tokyoMeta } from "@/lib/tokyo-meta";
import { validateStay } from "@/lib/booking";
export const Route = createFileRoute("/hotel-booking")({
  head: () =>
    tokyoMeta(
      "Hotel booking",
      "Plan your Tokyo hotel stay with your preferred neighborhood, travel dates, room type, guest details and special requests.",
    ),
  component: Booking,
});
function Booking() {
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<{
    name: string;
    arrival: string;
    departure: string;
    area: string;
    guests: string;
  } | null>(null);
  const [arrival, setArrival] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "");
    const message = validateStay(get("arrival"), get("departure"));
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setSummary({
      name: get("firstName"),
      arrival: get("arrival"),
      departure: get("departure"),
      area: get("neighborhood"),
      guests: get("adults"),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <TokyoLayout>
      <div className="site-container">
        <div className="page-intro">
          <div className="section-kicker">MAKE YOURSELF AT HOME</div>
          <h1>Your stay in Tokyo</h1>
          <p>
            A quiet retreat near the gardens or a base in the heart of Asakusa. Start with the
            details of your ideal stay.
          </p>
        </div>
        {summary ? (
          <div className="booking-success" role="status">
            <CheckCircle2 size={42} className="text-jade" />
            <h2>Your stay plan is ready, {summary.name}.</h2>
            <p>
              {summary.arrival} → {summary.departure}
              <br />
              {summary.guests} adult guest(s) · {summary.area}
            </p>
            <p>
              This is a planning form, not a confirmed hotel reservation. Your details have not been
              sent to a hotel or saved. Contact your preferred hotel to check availability and
              complete your booking.
            </p>
            <Button
              onClick={() => {
                setSummary(null);
                setArrival("");
              }}
            >
              Plan another stay <ArrowRight />
            </Button>
          </div>
        ) : (
          <div className="booking-layout">
            <form className="booking-form" onSubmit={submit}>
              <h2>
                01 <span className="text-muted-foreground mx-2">/</span> Your details
              </h2>
              <div className="form-grid">
                <label className="field">
                  First name *
                  <input
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="First name"
                  />
                </label>
                <label className="field">
                  Last name *
                  <input
                    name="lastName"
                    autoComplete="family-name"
                    required
                    placeholder="Last name"
                  />
                </label>
                <label className="field">
                  Email address *
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                  />
                </label>
                <label className="field">
                  Phone number *
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="Include country code"
                  />
                </label>
                <label className="field field-full">
                  Country / region of residence *
                  <input
                    name="country"
                    autoComplete="country-name"
                    required
                    placeholder="Country or region"
                  />
                </label>
              </div>
              <h2>
                02 <span className="text-muted-foreground mx-2">/</span> Your stay
              </h2>
              <div className="form-grid">
                <label className="field">
                  Check-in date *
                  <input
                    type="date"
                    name="arrival"
                    required
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                  />
                </label>
                <label className="field">
                  Check-out date *
                  <input type="date" name="departure" min={arrival || undefined} required />
                </label>
                <label className="field">
                  Adults *<input type="number" name="adults" min="1" defaultValue="2" required />
                </label>
                <label className="field">
                  Children
                  <input type="number" name="children" min="0" defaultValue="0" />
                </label>
                <label className="field">
                  Number of rooms *
                  <input type="number" name="rooms" min="1" defaultValue="1" required />
                </label>
                <label className="field">
                  Room preference *
                  <select name="room" required defaultValue="">
                    <option value="" disabled>
                      Select a room type
                    </option>
                    <option>Single room</option>
                    <option>Double room</option>
                    <option>Twin room</option>
                    <option>Family room</option>
                    <option>Suite</option>
                  </select>
                </label>
                <label className="field">
                  Preferred neighborhood *
                  <select name="neighborhood" required defaultValue="">
                    <option value="" disabled>
                      Select a neighborhood
                    </option>
                    <option>Asakusa / Ueno</option>
                    <option>Shibuya / Harajuku</option>
                    <option>Chiyoda / Tokyo Station</option>
                    <option>Minato / Shiba</option>
                    <option>Bunkyo / Komagome</option>
                    <option>No preference</option>
                  </select>
                </label>
                <label className="field">
                  Hotel category
                  <select name="category">
                    <option>No preference</option>
                    <option>Budget</option>
                    <option>Mid-range</option>
                    <option>Luxury</option>
                    <option>Traditional ryokan</option>
                  </select>
                </label>
                <label className="field">
                  Approximate budget per night (JPY)
                  <input type="number" name="budget" min="0" placeholder="e.g. 20000" />
                </label>
                <label className="field">
                  Estimated arrival time
                  <input type="time" name="time" />
                </label>
                <label className="field field-full">
                  Special requests
                  <textarea
                    name="requests"
                    rows={4}
                    placeholder="Accessibility needs, dietary preferences, children’s ages, or anything else…"
                  />
                </label>
              </div>
              <label className="check-field">
                <input type="checkbox" name="breakfast" /> I would prefer breakfast included.
              </label>
              <label className="check-field">
                <input type="checkbox" required /> I understand this form creates a stay plan only
                and does not reserve a hotel or take payment.
              </label>
              {error && (
                <p role="alert" className="form-error">
                  {error}
                </p>
              )}
              <Button type="submit" size="lg">
                Create My Stay Plan <ArrowRight />
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                No payment required. Details are not saved or sent to hotels.
              </p>
            </form>
            <aside className="booking-aside">
              <img
                src={heritageSites[1].image}
                alt="Peaceful architecture at Meiji Jingū"
                width={960}
                height={640}
              />
              <div className="section-kicker mt-6 flex items-center gap-2">
                <MapPin size={13} /> TOKYO, JAPAN
              </div>
              <h3>Stay a little. Discover a lot.</h3>
              <p>
                Wake up to a new neighborhood. Explore a shrine before the crowds arrive. Find your
                favorite street, and make Tokyo your own.
              </p>
              <div className="flex items-center gap-3 mt-6 text-sm text-jade">
                <BedDouble size={19} /> A stay shaped around you
              </div>
            </aside>
          </div>
        )}
      </div>
    </TokyoLayout>
  );
}
